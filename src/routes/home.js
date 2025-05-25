const express = require('express')
const router = express.Router()
const home = require('../controllers/home')

router.get('/', home.index)
router.get('/new', home.new)
router.post('/new', home.create)

module.exports = router
