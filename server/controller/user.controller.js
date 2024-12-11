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

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns objektas: refreshToken, accessToken, userDto
   */
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      // refresh tokena saugome cookies
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 d.
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns skaičius, kiek tokenu ištrinta :)
   *          reikia dar pasitikrinti
   */
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');

      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = res.cookies('refreshToken');

      const userData = await userService.refresh(refreshToken);
      // refresh tokena saugome cookies
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 d.
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
