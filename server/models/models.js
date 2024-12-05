const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Vardas privalomas',
      },
      notEmpty: {
        msg: 'Vardas privalomas',
      },
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: 'Toks el. pasto adresas jau naudojamas',
    },
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El. pastas privalomas',
      },
      notEmpty: {
        msg: 'El. pastas privalomas',
      },
      isEmail: {
        msg: 'Neteisingas el. pasto formatas',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Slaptazodis privalomas',
      },
      notEmpty: {
        msg: 'Slaptazodis privalomas',
      },
    },
  },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING, allowNull: true },
});

const Token = sequelize.define('token', {
  refreshToken: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Token);
Token.belongsTo(User);

module.exports = { User, Token };
