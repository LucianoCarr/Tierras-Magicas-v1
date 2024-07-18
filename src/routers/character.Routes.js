const express = require('express')
const {add, modify, all, create} = require('../controllers/characterController')
const router = express.Router()
const upload = require('../middleWares/upload')


//detalles
router.get('/all', all)
//crear
router.get('/add', add)
router.post('/add', upload.single('image'), create)
//editar
router.get('/edit/:id', modify)

//borrar

module.exports = router