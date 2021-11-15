const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller.js')

router.post('/post', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/post', postController.getOnePost);
router.put('/post', postController.updatePost);
router.delete('/post/:id', postController.deletePost);

module.exports = router;