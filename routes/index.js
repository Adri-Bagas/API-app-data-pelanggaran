var express = require('express');
const { User } = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {

  User.create({
    name: "Admin",
    email: "smkTB@gmail.com",
    password: "123456",
    level: "admin"
  })
  
});

module.exports = router;