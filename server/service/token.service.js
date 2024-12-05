const jwt = require('jsonwebtoken');
const { Token } = require('../models/models');

class TokenService {
  generateTokens(payload) {
    console.log('payload: ', payload);
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '1d',
    });

    return { accessToken, refreshToken };
  }

  async saveRefreshToken(userId, refreshToken) {
    // naudotojas gali turėti tik vieną aktyvų refresh tokeną
    // jei jis buvo prisijungęs iš kito įrenginio,
    // po prisijungimo jo tokenas bus perrašytas ir jis bus atjungtas
    // tame irenginyje
    const tokenData = await Token.findOne({ where: { userId: userId } });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await Token.create({ userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
