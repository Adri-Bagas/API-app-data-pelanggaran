'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pelanggarans',
    [
      {
        nama_pelanggaran : 'Terlambat Masuk Sekolah',
        ket_pelanggaran : 'Pengecekan tas dan mendapat teguran serta sanksi berupa siswa menyanyi lagu nasional/ mengaji dan membersihkan lingkungan sekolah',
        point : '5',
        jn_pelanggaran : 'Keterlambatan'
      },

      {
        nama_pelanggaran : 'Tidak Masuk Sekolah 3 Kali',
        ket_pelanggaran : 'Siswa dimintai keterangan dan membuat surat perjanjian serta diberikan surat panggilan untuk orang tua',
        point : '25',
        jn_pelanggaran : 'Kehadiran'
      },

      {
        nama_pelanggaran : 'Memakai Seragam Tidak rapi / Memakai Pakaian Yang ketat',
        ket_pelanggaran : 'Siswa langsung ditegur untuk merapihkan pakaian / Siswa dipanggil untuk tidak memakai kembali (jika melanggar, rok ditandai dengan spidol permanen dan membuat surat pernyataan dan panggilan orang tua)',
        point : '15',
        jn_pelanggaran : 'Berpakaian'
      },

      {
        nama_pelanggaran : 'Bersolek berlebihan di lingkungan sekolah: memakai lipstick, maskara, soft lens, blush on, eye liner, cat kuku/ henna, dll',
        ket_pelanggaran : 'Alat make-up diambil dan tidak dikembalikan kecuali pengharum badan dan minyak rambut  kemudian dipanggil untuk diberi  pengarahan dan pembinaan ',
        point : '5',
        jn_pelanggaran : 'Kepribadian'
      },

      {
        nama_pelanggaran : 'Melompat pagar sekolah untuk keluar masuk',
        ket_pelanggaran : '3	Melompat pagar sekolah untuk keluar masuk	25	Siswa diberikan peringatan dan sanksi kebersihan',
        point : '25',
        jn_pelanggaran : 'Ketertiban'
      },


      {
        nama_pelanggaran : 'Membawa atau menghisap rokok/ vape/ rokok elektrik/ korek/ liquid di dalam di luar sekolah dengan memakai seragam sekolah',
        ket_pelanggaran : '	Rokok/ vape/ rokok elektrik/ korek/ liquid disita dan siswa diberikan pembinaan serta pemanggilan orang tua',
        point : '50',
        jn_pelanggaran : 'Merokok'
      },

      {
        nama_pelanggaran : 'Membawa/ menyimpan/ mengakses/ memperjualbelikan konten pornografi',
        ket_pelanggaran : 'Diberikan surat peringatan I, panggilan orang tua, membuat surat pernyataan',
        point : '50',
        jn_pelanggaran : 'Pornografi'
      },

      {
        nama_pelanggaran : 'Membawa senjata tajam/api ke sekolah',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan  proses hukum diserahkan kepada pihak kepolisian',
        point : '100',
        jn_pelanggaran : 'Senjata Tajam'
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

    await queryInterface.bulkDelete('Pelanggarans', null, {});
  }
};
