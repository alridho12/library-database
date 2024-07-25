const express = require('express')
const router = express.Router()
const anggotaController = require('../controllers/anggota')
const { protect, validatePetugas } = require('../middleware/auth')

router
.post('/addanggota',protect,validatePetugas, anggotaController.addAnggota)
.get('/', anggotaController.getAllAnggota)

module.exports = router