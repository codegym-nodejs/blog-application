const express = require('express');
const route = express.Router();
const postController = require('../controller/postController');

route.get('/new', (req, res) => {
  res.render("create");
});

route.post('/new', postController.newPost);

route.get('/:id', postController.getPostById);
module.exports = route;