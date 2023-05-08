var express = require('express');
var router = express.Router();
const {Siswa, Kelas, CatPelSiswa, Pelanggaran} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/show/all', async function(req, res, next){

    var datas = await Siswa.findAll({include: Kelas});

    if(datas == null){
        res.json({data: "Not Found!"})
    }

    res.json({data: datas})

});

router.get('/show/:id', async function (req, res, next){

    var ids = req.params.id

    var siswa = await Siswa.findOne({
        where: {
            id: ids
        },
        include: Kelas,
    })

    if(siswa == null){
        res.json({errC: "Siswa Not Found!"})
    }

    var records = await CatPelSiswa.findAll({
        where: {
            id_siswa: ids
        }
    }) 

    if(records == null){
        res.json({
            data: {
                siswa: siswa,
                pelanggaran: 0,
            }
        })
    }

    var data_pelanggarans = [];

    var promises = records.map(async element =>{
        return await Pelanggaran.findOne({
            where: {
                id: element.id_pelanggaran
            },
            include: CatPelSiswa,
        })
    })

    Promise.all(promises)
        .then(result => {
            data_pelanggarans = result

            var sum = 0

            data_pelanggarans.forEach(element => {
                sum += element.poin
            });
            res.json({
                data: {
                    siswa: siswa,
                    pelanggaran: data_pelanggarans,
                    sum_poin: sum,
                }
            })
        })
        .catch(error =>{
            console.error(error);
        })

})

module.exports = router;