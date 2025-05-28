const express = require('express')
require('dotenv').config()
const app = express()
const routes = require('./routes/home')

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
