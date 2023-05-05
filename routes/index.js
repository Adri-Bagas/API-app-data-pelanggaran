var express = require('express');
const { Kelas, Siswa } = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {

  var data_kelas = await Kelas.findOne({where:{id: 1} ,include: Siswa});

  res.json({data: data_kelas})
});

module.exports = router;