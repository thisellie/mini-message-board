const express = require('express')
const app = express()
const routes = require('./routes/home')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
