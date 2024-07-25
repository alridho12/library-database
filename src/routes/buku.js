const express = require('express')
const router = express.Router()
const bukuController = require('../controllers/buku')
const { protect, validateAdmin } = require('../middleware/auth')

router
.post('/addbuku',protect,validateAdmin, bukuController.addBuku)
.get('/', bukuController.getAllBuku)

module.exports = router