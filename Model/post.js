const mongoose = require('mongoose')

//3. Create a Schema (Structure)
const PostSchema = new mongoose.Schema({
  content: { type: String },
  Fileurl: { type: String, required: true }
})


//4. Create a model
const Post = mongoose.model('Post', PostSchema)

module.exports = Post



