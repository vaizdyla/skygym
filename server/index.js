require('dotenv').config();
const PORT = process.env.PORT || 3003;
const express = require('express');

// duombaze ir lenteles
const sequelize = require('./db');
const models = require('./models/models');

// api endpointai
const router = require('./router/router');

// protingas komentaras
const cors = require('cors');
const cookieParser = require('cookie-parser'); // refreshToken saugosime cookies
const errorsMiddleware = require('./middlewares/error.middleware');

const app = express();

// Middlewares visokios
app.use(
  cors({
    // Dėl slapukų
    // turi būti nurodomas fronto URL !!!
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

// Klaidos prijungiamos VISADA PASKUTINĖS!!!
app.use(errorsMiddleware);

const startServer = async () => {
  try {
    // prisijungiam prie db
    await sequelize.authenticate();
    // sinchronizuojam modelius su db
    // prodakšine atjungiam sinchronizaivmo funkciją
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      // cia reikia kazka rimciau sugalvoti
      console.log(`Serversi veikia. Prievadas: ${PORT}`);
    });
  } catch (e) {
    // cia irgi info serveryje turbut i logus det reiks
    console.log(e);
  }
};

startServer();
