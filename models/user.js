'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Kelas, {
        foreignKey: "Walas"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    level: DataTypes.STRING,
    password: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
      },
      beforeBulkCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeBulkUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate:async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
      }
    },
    instanceMethods: {
      validPassword: (password) => {
      return bcrypt.compareSync(password, this.password);
      }
    }
    });
    User.prototype.validPassword = async (password, hash) => {
      return await bcrypt.compareSync(password, hash);
    }
  return User;
};