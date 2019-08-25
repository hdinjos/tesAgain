var express = require('express');
var router = express.Router();
const db = require('../config/database')
const UserController = require('../controllers/UserController')

/* GET home page. */

router.get('/', UserController.index)

router.get('/form',function(req,res,next) {
    res.render('form')
})

module.exports = router;
