const Post = require('../Model/post')

exports.getPosts = () => {
  return Post.find()
}

exports.addPost = (content, Fileurl) => {

  const post = new Post()

  post.content = content
  post.Fileurl = Fileurl

  return post.save()
}

exports.getSinglePost = (id) => {
  return Post.findById(id)
}

exports.updatePost = () => { }

exports.deletePost = (id) => {
  return Post.findByIdAndDelete(id)
}