const express = require('express')
const app = express()
const { Router } = require('express')
const router = Router()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

app.get('/', (req, res) => {
  res.render('index', { messages })
})

app.get('/new', (req, res) => {
  res.render('form')
})

app.use(express.urlencoded({ extended: true }))

app.post('/new', (req, res) => {
  const { user, text } = req.body
  messages.push({ user, text, added: new Date() })
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
