const PostModel = require('../model/Post');

exports.newPost = async function(req, res, next) {
  console.log(req.body);
  PostModel.create(req.body, (err, post) => {
    if(err)  return res.redirect('/')
    if(post) {
      res.redirect('/');
    }
  })
}

exports.getPostById = async function(req, res, next) {
  PostModel.findById(req.params.id, function(error, detailPost){
    res.render('post', { detailPost }) 
  })
}
