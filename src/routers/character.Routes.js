const express = require('express')
const {add, modify, all, create, edit, destroy, admin, } = require('../controllers/characterController')
const router = express.Router()
const upload = require('../middleWares/upload')


//mostrar
router.get('/all', all)
router.get('/admin', admin)
//crear
router.get('/add', add)
router.post('/add', upload.single('image'), create)
//editar
router.get('/edit/:id', modify)
router.put('/edit/:id', upload.single('image'), edit)
//borrar
router.delete('/delete/:id', destroy)

module.exports = router