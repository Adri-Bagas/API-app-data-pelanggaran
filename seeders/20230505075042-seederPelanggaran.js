'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pelanggarans',
    [
      {
        nama_pelanggaran : 'Terlambat Masuk Sekolah Pagi 6.45 , Siang 13.00',
        ket_pelanggaran : 'Pengecekan tas dan mendapat teguran serta sanksi berupa siswa menyanyi lagu nasional/ mengaji dan membersihkan lingkungan sekolah',
        poin : '5',
        jn_pelanggaran : 'Keterlambatan'
      },

      {
        nama_pelanggaran : 'Keluar sekolah saat jam istirahat tanpa seizin guru piket / wali kelas',
        ket_pelanggaran : '2	Keluar sekolah saat jam istirahat tanpa seizin guru piket / wali kelas	10	Siswa dimintai keterangan dan surat pembinaan',
        poin : '10',
        jn_pelanggaran : 'Keterlambatan'


      },

      // KEHADIRAN

      {
        nama_pelanggaran : 'Tidak Masuk Sekolah 3 Kali',
        ket_pelanggaran : 'Siswa dimintai keterangan dan membuat surat perjanjian serta diberikan surat panggilan untuk orang tua',
        poin : '25',
        jn_pelanggaran : 'Kehadiran'
      },

      {
        nama_pelanggaran : 'Tidak masuk sekolah tanpa sepengetahuan pihak sekolah baik Guru atau Wali Kelas (izin melalui teman, baik telepon/SMS/ WA)',
        ket_pelanggaran : 'Siswa dimintai keterangan dan surat pembinaan',
        poin : '10',
        jn_pelanggaran : 'Kehadiran'


      },

      {
        nama_pelanggaran : 'Siswa meninggalkan KBM tanpa seizin guru mapel dan guru piket',
        ket_pelanggaran : 'Siswa dimintai keterangan dan surat pembinaan',
        poin : '10',
        jn_pelanggaran : 'Kehadiran'


      },


      {
        nama_pelanggaran : 'Tidak mengikuti ekstrakurikuler yang telah dipilih',
        ket_pelanggaran : 'Diwajibkan membuat surat pernyataan sesuai dengan alasannya dan diberikan surat pembinaan',
        poin : '10',
        jn_pelanggaran : 'Kehadiran'


      },

      {
        nama_pelanggaran : 'Tidak mengikuti upacara bendera',
        ket_pelanggaran : 'Siswa ditugaskan membersihkan lingkungan sekolah dengan pengawasan guru',
        poin : '10',
        jn_pelanggaran : 'Kehadiran'


      },

    // BERPAKAIAN


      {
        nama_pelanggaran : 'Memakai Seragam Tidak rapi / Memakai Pakaian Yang ketat',
        ket_pelanggaran : 'Siswa langsung ditegur untuk merapihkan pakaian / Siswa dipanggil untuk tidak memakai kembali (jika melanggar, rok ditandai dengan spidol permanen dan membuat surat pernyataan dan panggilan orang tua)',
        poin : '15',
        jn_pelanggaran : 'Berpakaian'
      },


      {
        nama_pelanggaran : 'Memakai pakaian ketat/rok span, rok di atas 10 cm diatas mata kaki',
        ket_pelanggaran : 'Siswa dipanggil untuk tidak memakai kembali (jika melanggar, rok ditandai dengan spidol permanen dan membuat surat pernyataan dan panggilan orang tua)',
        poin : '15',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : 'Siswa laki-laki memakai celana ketat, celana pensil,  kantung banyak, celana 7/8 (mengatung)',
        ket_pelanggaran : 'Siswa ditindak dengan melepas jahitan, panggilan orang tua/wali siswa. Siswa diminta membuat surat pernyataan di depan orang tua/wali siswa (jika masih melanggar, celana langsung digunting)',
        poin : '15',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : '	Memakai pakaian seragam tidak sesuai dengan jadwal yang telah di tentukan',
        ket_pelanggaran : '4.1	Memakai pakaian seragam tidak sesuai dengan jadwal yang telah di tentukan',
        poin : '15',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : 'Memakai atribut yang tidak ditentukan oleh sekolah seperti: topi bebas, ikat pinggang bukan hitam/kopel besar/bukan model yang telah ditentukan, jaket/rompi/sweater/cardigan di lingkungan sekolah; kecuali sakit (Surat Dokter)/diketahui guru piket',
        ket_pelanggaran : '1 kali pelanggaran atribut akan disita dan pembinaan, kemudian dikembalikan dengan membuat berita acara penyitaan',
        poin : '10',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : 'Membawa dan menggunakan Handphone (HP) di dalam  ruang kelas (tanpa seizin guru mapel)',
        ket_pelanggaran : '1x pelanggaran akan disita selama satu hari 2x pelanggaran akan disita selama 1minggu dan dilakukan pemanggilan orang tua',
        poin : '10',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : 'Membuat/mencetak kaos, topi, stiker, jaket, pin atau atribut lainnya dengan menggunakan logo dan nama sekolah yang dimodifikasi tanpa seizin sekolah ',
        ket_pelanggaran : 'Siswa diberi pengarahan / pembinaan dan membuat surat pernyataan untuk tidak dipakai dilingkungan sekolah (jika masih melanggar, orang tua siswa di panggil ke sekolah)',
        poin : '15',
        jn_pelanggaran : 'Berpakaian'


      },

      {
        nama_pelanggaran : 'Memakai kaos kaki tidak sesuai ketentuan sekolah',
        ket_pelanggaran : '5	Memakai kaos kaki tidak sesuai ketentuan sekolah	5	Siswa diberi pengarahan dan disita kaos kakinya',
        poin : '5',
        jn_pelanggaran : 'Berpakaian'


      },

    // KEPRIBADIAN

      {
        nama_pelanggaran : 'Bersolek berlebihan di lingkungan sekolah: memakai lipstick, maskara, soft lens, blush on, eye liner, cat kuku/ henna, dll',
        ket_pelanggaran : 'Alat make-up diambil dan tidak dikembalikan kecuali pengharum badan dan minyak rambut  kemudian dipanggil untuk diberi  pengarahan dan pembinaan ',
        poin : '5',
        jn_pelanggaran : 'Kepribadian'
      },

      {
        nama_pelanggaran : 'Memakai perhiasan berlebihan di lingkungan sekolah',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pengarahan / pembinaan moral',
        poin : '5',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Siswa memakai aksesoris (gelang, kalung, cincin)',
        ket_pelanggaran : 'Barang tersebut diambil dan tidak dikembalikan',
        poin : '5',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Ditindik, tatto temporary/permanen	100	Dikembalikan ke orang Tua',
        ket_pelanggaran : 'Dikembalikan ke orang Tua',
        poin : '100',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Rambut siswa putra gondrong atau model Mohawk/skin',
        ket_pelanggaran : 'Siswa diberi peringatan dan pemberitahuan, jika masih melanggar pihak sekolah akan melakukan pencukuran dengan pihak terkait',
        poin : '15',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Memelihara kuku panjang',
        ket_pelanggaran : 'Siswa diminta untuk memotong kuku saat itu juga',
        poin : '5',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Rambut putra/putri di cat/ semir bukan hitam',
        ket_pelanggaran : 'Warna rambut diminta segera dikembalikan sesuai dengan warna aslinya (jika dalam waktu yang ditentukan warna rambut belum ada perubahan, maka pihak sekolah akan melakukan pemotongan rambut)',
        poin : '10',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : '8	Rambut perempuan tergerai/ tidak diikat	5	Siswa dipanggil untuk diberi pembinaan selanjutnya rambut diminta diikat (sanksi kebersihan)',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pembinaan selanjutnya rambut diminta diikat (sanksi kebersihan)',
        poin : '5',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Mengeluarkan kata-kata tidak tidak sopan',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pembinaan moral, dan mengatakan istigfar 10x (islam), doa permohonan maaf (agama lain)',
        poin : '10',
        jn_pelanggaran : 'Kepribadian'


      },




      {
        nama_pelanggaran : 'Mencemarkan nama baik sekolah yang bersifat langsung/ tidak langsung di media sosial',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pembinaan dan diberi surat panggilan orang tua',
        poin : '50',
        jn_pelanggaran : 'Kepribadian'


      },




      {
        nama_pelanggaran : 'Menyakiti perasaan orang lain: menghina, memperolok, memfitnah (bullying)',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pembinaan dan diberi surat panggilan orang tua',
        poin : '50',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: Melakukan perjudian dan sejenisnya ',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua',
        poin : '100',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: 	Mengancam sesama siswa baik verbal/non verbal yang dilakukan secara langsung ataupun melalui media sosial',
        ket_pelanggaran : 'Teguran dan pembinaan, surat pernyataan serta pemanggilan orang tua',
        poin : '50',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: 	Berbohong/membuat kesaksian palsu ',
        ket_pelanggaran : 'Teguran dan pembinaan, surat pernyataan serta pemanggilan orang tua',
        poin : '50',
        jn_pelanggaran : 'Kepribadian'


      },



      



      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: 	Melakukan perbuatan tindak asusila selama menjadi siswa',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua',
        poin : '100',
        jn_pelanggaran : 'Kepribadian'


      },


      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: Melakukan pembunuhan di dalam sekolah maupun di luar sekolah ',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan proses hukum diserahkan kepada pihak kepolisian',
        poin : '100',
        jn_pelanggaran : 'Kepribadian'


      },

      {
        nama_pelanggaran : 'Melakukan tindakan kriminal di dalam/luar sekolah: 6.1	Melakukan pemalakan terhadap sesama siswa didalam/diluar sekolah baik berupa uang ataupun barang ',
        ket_pelanggaran : 'Teguran dan pembinaan, surat pernyataan serta pemanggilan orang tua',
        poin : '75',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Menikah, menghamili/ hamil selama menjadi siswa',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua',
        poin : '100',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Berkumpul di luar sekolah memakai seragam sekolah saat KBM',
        ket_pelanggaran : 'Siswa dipanggil keesokan harinya untuk diarahkan dan diberikan pembinaan',
        poin : '20',
        jn_pelanggaran : 'Kepribadian'


      },



      {
        nama_pelanggaran : 'Melawan guru, pegawai sekolah baik berupa kata kata/umpatan/cacian/makian/tindakan',
        ket_pelanggaran : 'Siswa dipanggil untuk diarahkan dan diberikan pembinaan, diberikan surat panggilan orang tua dan membuat perjanjian',
        poin : '75',
        jn_pelanggaran : 'Kepribadian'


      },
      

      
    // KETERTIBAN

      

      {
        nama_pelanggaran : 'Merusak sarana dan prasarana sekolah baik disengaja maupun tidak disengaja',
        ket_pelanggaran : 'Siswa wajib mengembalikan sarana dan prasarana milik sekolah seperti semula dan  membuat surat perjanjian serta panggilan orang tua.',
        poin : '50',
        jn_pelanggaran : 'Ketertiban'


      },



      {
        nama_pelanggaran : 'Membuat kegaduhan di dalam/di luar sekolah',
        ket_pelanggaran : 'Siswa diberikan peringatan',
        poin : '10',
        jn_pelanggaran : 'Ketertiban'


      },

      {
        nama_pelanggaran : 'Melompat pagar sekolah untuk keluar masuk',
        ket_pelanggaran : '3	Melompat pagar sekolah untuk keluar masuk	25	Siswa diberikan peringatan dan sanksi kebersihan',
        poin : '25',
        jn_pelanggaran : 'Ketertiban'
      },



      {
        nama_pelanggaran : 'Tidak melaksanakan tugas K3 / Piket kelas',
        ket_pelanggaran : 'Membersihkan lingkungan sekolah setelah pulang sekolah/hari esoknya dengan pengawasan petugas sekolah',
        poin : '10',
        jn_pelanggaran : 'Ketertiban'


      },

      {
        nama_pelanggaran : 'Tidur dan makan dalam kelas saat KBM tanpa seizin guru',
        ket_pelanggaran : 'Siswa diberikan teguran dan wajib membersihkan ruangan tersebut',
        poin : '5',
        jn_pelanggaran : 'Ketertiban'
      },

      {
        nama_pelanggaran : 'Membuang permen karet bekas disembarang tempat',
        ket_pelanggaran : 'Siswa diberikan teguran dan wajib membersihkan bekas permen karet tersebut sampai bersih',
        poin : '15',
        jn_pelanggaran : 'Ketertiban'
      },


      {
        nama_pelanggaran : 'Mengajak teman luar masuk ke area sekolah tanpa izin dan tanpa tujuan yang jelas',
        ket_pelanggaran : 'Siswa dipanggil untuk dimintai keterangan dan diberikan surat teguran',
        poin : '20',
        jn_pelanggaran : 'Ketertiban'
      },

      {
        nama_pelanggaran : 'Meludah / membuang sampah sembarangan di area sekolah',
        ket_pelanggaran : 'Siswa dipanggil untuk diberi pembinaan moral dan sanksi kebersihan',
        poin : '10',
        jn_pelanggaran : 'Ketertiban'
      },

      
    // MEROKOK

      {
        nama_pelanggaran : 'Membawa atau menghisap rokok/ vape/ rokok elektrik/ korek/ liquid di dalam di luar sekolah dengan memakai seragam sekolah',
        ket_pelanggaran : '	Rokok/ vape/ rokok elektrik/ korek/ liquid disita dan siswa diberikan pembinaan serta pemanggilan orang tua',
        poin : '50',
        jn_pelanggaran : 'Merokok'
      },


    // PORNOGRAFI

      {
        nama_pelanggaran : 'Membawa/ menyimpan/ mengakses/ memperjualbelikan konten pornografi',
        ket_pelanggaran : 'Diberikan surat peringatan I, panggilan orang tua, membuat surat pernyataan',
        poin : '50',
        jn_pelanggaran : 'Pornografi'
      },

      {
        nama_pelanggaran : 'Membuat/ mengirim konten pornografi kepada orang lain',
        ket_pelanggaran : 'Diberikan surat peringatan I, panggilan orang tua, membuat surat pernyataan',
        poin : '50',
        jn_pelanggaran : 'Pornografi'
      },


      {
        nama_pelanggaran : 'Menyebarluaskan/ meng-upload konten pornografi diri sendiri/orang lain ke jejaring sosial/media lain',
        ket_pelanggaran : 'Diberikan surat peringatan I, panggilan orang tua, membuat surat pernyataan',
        poin : '50',
        jn_pelanggaran : 'Pornografi'
      },


    // SENJATA TAJAM


      {
        nama_pelanggaran : 'Membawa senjata tajam/api ke sekolah',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan  proses hukum diserahkan kepada pihak kepolisian',
        poin : '100',
        jn_pelanggaran : 'Senjata Tajam'
      },

      {
        nama_pelanggaran : 'Memperjualbelikan senjata tajam/api',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan  proses hukum diserahkan kepada pihak kepolisian',
        poin : '100',
        jn_pelanggaran : 'Senjata Tajam'
      },


      {
        nama_pelanggaran : 'Menggunakan senjata tajam/api untuk melukai orang lain',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan  proses hukum diserahkan kepada pihak kepolisian',
        poin : '100',
        jn_pelanggaran : 'Senjata Tajam'
      },

      // NARKOBA DAN MIRAS
      {
        nama_pelanggaran : 'Mabuk di sekolah/ lingkungan sekolah akibat narkoba/miras',
        ket_pelanggaran : 'Siswa dikembalikan ke orang tua dan  proses hukum diserahkan kepada pihak kepolisian',
        poin : '100',
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
