const userService = require('../service/user.service');

class UserController {
  async registration(req, res, next) {
    try {
      const { first_name, email, password } = req.body;
      const newUserInfo = await userService.registration(
        first_name,
        email,
        password
      );

      if (newUserInfo.refreshToken) {
        // refresh tokena saugome cookies
        res.cookie('refreshToken', newUserInfo.refreshToken, {
          maxAge: 24 * 60 * 60 * 1000, // 1 d.
          httpOnly: true,
        });
      }

      return res.json(newUserInfo);
    } catch (e) {}
  }

  async getAllUsers(req, res, next) {
    try {
      res.json(['viskas ok', 'kas toliau?']);
    } catch (e) {}
  }
}

module.exports = new UserController();
