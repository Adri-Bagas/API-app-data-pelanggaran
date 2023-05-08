var express = require('express');
const { User, Kelas } = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {

    var kelas = await Kelas.findAll({
        include: User
    })

    if(kelas == null){
        res.json({error: "Kelas NOT FOUND!"})
    }

    res.json({
        data: kelas
    })
    
});

module.exports = router;