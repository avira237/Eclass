exports.addPostValidator = (req, res, next) => {

  const { content,Fileurl } = req.body
  let errors = {}

  if (content === '') errors.caption = 'content can not be blank.'
  if (Fileurl === '') errors.imageUrl = 'file Can not be blank.'

  if (Object.keys(errors).length === 0) {
    next()
  } else {
    res.status(400).json(errors)
  }
}
