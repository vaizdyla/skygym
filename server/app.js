const express = require('express');
const app = express();

const settingRoutes = require('./api/routes/settings');

app.use((req, res, next) => {
  res.status(200).json({
    message: 'Veikia...',
  });
});

module.exports = app;
