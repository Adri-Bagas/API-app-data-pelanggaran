'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelanggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelanggaran.init({
    nama_pelanggaran: DataTypes.STRING,
    ket_pelanggaran : DataTypes.STRING,
    poin: DataTypes.INTEGER,
    jn_pelanggaran: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pelanggaran',
  });
  return Pelanggaran;
};