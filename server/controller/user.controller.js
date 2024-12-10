const userService = require('../service/user.service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api.errors');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validacijos klaida', errors.array()));
      }

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
    } catch (e) {
      next(e);
    }
  }

  async activation(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activation(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body();
      const userData = await userService.login(email, password);
      // refresh tokena saugome cookies
      res.cookie('refreshToken', newUserInfo.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 d.
        httpOnly: true,
      });
    } catch (e) {
      next(e);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      res.json(['viskas ok', 'kas toliau?']);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
