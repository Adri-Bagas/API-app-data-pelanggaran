'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Kelas', 
    [
      {
        namaKelas : 'XI PPLG 2',
        namaWalas : 'Nahla Naufan'
      },
      {
        namaKelas : 'XI PPLG 1',
        namaWalas : 'Bu Shinta'
      },
      {
        namaKelas : 'XI ANIMASI 4',
        namaWalas : 'Ibu Guru'
      },
    ])


    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Kelas', null, {})
  }
};
