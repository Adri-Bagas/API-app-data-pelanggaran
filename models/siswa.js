'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Siswa.belongsTo(models.Kelas,{
        foreignKey: 'kelasId'
      })
      Siswa.hasMany(models.CatPelSiswa, {
        foreignKey: 'id_siswa'
      })
    }
  }
  Siswa.init({
    nama: DataTypes.STRING,
    nisn: DataTypes.STRING,
    img: DataTypes.STRING,
    kelasId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Siswa',
    tableName: 'siswas'
  });
  return Siswa;
};