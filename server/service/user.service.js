const mailService = require('../service/mail.service');
const tokenService = require('../service/token.service');
const ApiError = require('../exceptions/api.errors');
const { User } = require('../models/models');
const UserDto = require('../dto/user.dto');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

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
    const user = await User.findOne({ where: { email } });

    if (!user) throw new ApiError('Naudotojo su tokiu el. pašto adresnu nėra');

    // Čia turi buti patikrinimas, ar naudotojas aktyvavo savo paskyrą

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new ApiError('Neteisingas slaptažodis');

    const userDto = new UserDto(user);

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }

  /**
   * Funkcija ištrina prisijungusio naudotojo refreshToken
   * @param {*} refreshToken
   * @returns kiek refreshToken ištrinta iš db
   */
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) throw new ApiError.UnauthorizedError();

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) throw new ApiError.UnauthorizedError();

    const user = await User.findOne({ where: { id: userData.id } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await User.findAll();

    return users;
  }
}

module.exports = new UserService();
