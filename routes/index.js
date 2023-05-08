var express = require('express');
const { User, Siswa, Pelanggaran, CatPelSiswa } = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {


  res.json({massage: "Testing Porpuse!"})
  
  // CatPelSiswa.create({
  //   id_pelanggaran: 1,
  //   id_siswa: 2,
  //   id_user: 1,
  //   keterangan: "Kok Telat Bang??"
  // })

  // CatPelSiswa.create({
  //   id_pelanggaran: 1,
  //   id_siswa: 2,
  //   id_user: 1,
  //   keterangan: "Kok Telat Lagi Bang??"
  // })

  // CatPelSiswa.create({
  //   id_pelanggaran: 3,
  //   id_siswa: 3,
  //   id_user: 1,
  //   keterangan: "Kok Bisa Bang??"
  // })

  // User.create({
  //   name: "Admin",
  //   email: "smkTB@gmail.com",
  //   password: "123456",
  //   level: "admin"
  // })
  
});

module.exports = router;