'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kelas.belongsTo(models.User, {
        foreignKey: "Walas"
      })
      Kelas.hasMany(models.Siswa, {
        foreignKey: "kelasId"
      })
    }
  }
  Kelas.init({
    namaKelas: DataTypes.STRING,
    Walas: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Kelas',
    tableName: 'kelas'
  });
  return Kelas;
};