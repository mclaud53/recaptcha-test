const express = require('express')
const axios = require('axios')
const hbs = require('express-hbs')
const app = express()

const {PUBLIC_KEY, SECRET_KEY, SERVER_PORT = 3000} = process.env

app.use(express.static('public'))
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('main-page')
})

app.get('/v2/invisible', (req, res) => {
    res.render('captcha-page', {
        TITLE: 'Invisible reCAPTCHA V2 test application',
        PUBLIC_KEY,
        CAPTCHA_VERSION: 'v2-invisible'
    })
})

app.get('/v2/checkbox', (req, res) => {
    res.render('captcha-page', {
        TITLE: 'reCAPTCHA V2 with checkbox test application',
        PUBLIC_KEY,
        CAPTCHA_VERSION: 'v2-with-checkbox'
    })
})

app.get('/v3', (req, res) => {
    res.render('captcha-page', {
        TITLE: 'reCAPTCHA V3 test application',
        PUBLIC_KEY,
        CAPTCHA_VERSION: 'v3'
    })
})

app.get('/validate-token', (req, res) => {
    axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.query.response}`)
    .then(response => {
        res.json(response.data)
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${SERVER_PORT}`)
})
