const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const postsController = require('../Controller/PostController')
const postsValidator = require('../Controller/validators/postsValidator')


router.get('/', postsController.getPosts)

router.get('/:id', postsController.getSinglePost)

router.post('/upload', [
  upload.single('image'),
  postsController.uploadFile
])

router.post('/', [
  postsValidator.addPostValidator,
  postsController.addPost
])

router.delete('/:id', postsController.deletePost)

router.put('/:id', postsController.updatePost)

module.exports = router