const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString(),
  },
]

exports.index = (req, res) => {
  res.render('index', { messages })
}

exports.new = (req, res) => {
  res.render('form')
}

exports.create = (req, res) => {
  const { user, text } = req.body
  messages.push({ user, text, added: new Date() })
  res.redirect('/')
}
