var express = require('express');
var router = express.Router();
const {Siswa, Kelas} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/data', async function(req, res, next){

    var datas = await Siswa.findAll({include: Kelas});

    res.json({data: datas})

});

module.exports = router;