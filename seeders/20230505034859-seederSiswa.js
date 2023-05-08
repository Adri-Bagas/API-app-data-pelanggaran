'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Siswas', 
    [
      {
        nama: 'Adri Bagas Witjaksono',
        kelasId: 1,
      },
      {
        nama: 'Arya Rachman',
        kelasId: 1,
      },
      {
        nama: 'Fachry',
        kelasId: 1,
      },
      {
        nama: 'Lumi Novry',
        kelasId: 2,
      },
      {
        nama: 'Ridho',
        kelasId: 2,
      },
      {
        nama: 'Vanessa',
        kelasId: 3,
      },
      {
        nama: 'Noe',
        kelasId: 3,
      },
      {
        nama: 'Fauzan',
        kelasId: 3,
      },

      {
        nama: 'Zahra Aulia',
        kelasId: 3,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('siswas', null, {});
  }
};
