const query = require('../db/queries')

exports.index = async (req, res) => {
  const messages = await query.getMessages()
  res.render('index', { messages })
}

exports.new = (req, res) => {
  res.render('form')
}

exports.create = async (req, res) => {
  const { username, text } = req.body
  await query.addMessage(text, username)
  res.redirect('/')
}
