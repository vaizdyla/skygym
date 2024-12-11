const ApiError = require('../exceptions/api.errors');
const tokenService = require('../service/token.service');

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) throw new ApiError.UnauthorizedError();

    const accessToken = authorizationHeader.split(' ')[1];

    if (!accessToken) throw new ApiError.UnauthorizedError();

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) throw new ApiError.UnauthorizedError();

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
