'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggaran_siswa_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelanggaran_siswa_user.init({
    id_pelanggaran: DataTypes.UUID,
    id_siswa: DataTypes.UUID,
    id_user: DataTypes.UUID,
    keterangan: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'pelanggaran_siswa_user',
  });
  return pelanggaran_siswa_user;
};