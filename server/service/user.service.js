const mailService = require('../service/mail.service');
const tokenService = require('../service/token.service');
const { User } = require('../models/models');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const UserDto = require('../dto/user.dto');
const ApiError = require('../exceptions/api.errors');

class UserService {
  async registration(first_name, email, password) {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser)
      throw ApiError.BadRequest(`El. pašto adresas ${email} jau naudojamas`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const activationLink = uuid.v4();

    const user = await User.create({
      first_name,
      email,
      password: hashedPassword,
      activationLink,
    });

    await mailService.sendActivationMail(
      first_name,
      email,
      `http://api.skygym.lt/api/activation/${activationLink}`
    );
    const userDto = new UserDto(user); // id, email, isActivated

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }

  async activation(activationLink) {
    const user = await User.findOne({ where: { activationLink } });

    if (!user) throw ApiError.BadRequest('Negaliojanti aktyvavimo nuoroda');

    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    // Ar yra toks naudotojas (el. paštas)
    const user = await User.findOne({ email });

    if (!user) throw ApiError('Naudotojo su tokiu el. pašto adresnu nėra');

    // Čia turi buti patikrinimas, ar naudotojas aktyvavo savo paskyrą

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw ApiError('Neteisingas slaptažodis');

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
  }
}

module.exports = new UserService();
