const express = require('express')
const router = express.Router()
const { create, get, getById, update, _delete } = require('../controllers/post.controller')

router.post('/posts', create)
router.get('/posts', get)
router.get('/posts/:id', getById)
router.put('/posts/like/:id', update)
router.delete('/posts/:id', _delete)

module.exports = router
