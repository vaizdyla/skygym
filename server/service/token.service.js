const jwt = require('jsonwebtoken');
const { Token } = require('../models/models');

class TokenService {
  /**
   * Funkcija tikrina, ar accessToken tikras
   * @param {*} token
   * @returns
   */
  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

      return userData;
    } catch (e) {
      return null;
    }
  }

  /**
   * Funkcija tikrina, ar refreshToken tikras
   * @param {*} token
   * @returns
   */
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

      return userData;
    } catch (e) {
      return null;
    }
  }

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

  /**
   *
   * @param {*} userId
   * @param {*} refreshToken
   * @returns
   */
  async saveRefreshToken(userId, refreshToken) {
    // naudotojas gali turėti tik vieną aktyvų refresh tokeną
    // jei jis buvo prisijungęs iš kito įrenginio,
    // po prisijungimo jo tokenas bus perrašytas ir jis bus atjungtas
    // tame irenginyje
    const tokenData = await Token.findOne({ where: { userId: userId } });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }

    const token = await Token.create({ userId, refreshToken });

    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });

    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } });

    return tokenData;
  }
}

module.exports = new TokenService();
