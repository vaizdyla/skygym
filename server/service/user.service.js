const mailService = require('../service/mail.service');
const tokenService = require('../service/token.service');
const { User } = require('../models/models');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const UserDto = require('../dto/user.dto');

class UserService {
  async registration(first_name, email, password) {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) return 'Toks el. pašto adresas jau naudojamas';

    const hashedPassword = await bcrypt.hash(password, 10);
    const activationLink = uuid.v4();

    const user = await User.create({
      first_name,
      email,
      password: hashedPassword,
      activationLink,
    });

    await mailService.sendActivationMail(first_name, email);
    const userDto = new UserDto(user); // id, email, isActivated

    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }
}

module.exports = new UserService();
