const express = require('express')
const axios = require('axios')
const hbs = require('express-hbs')
const app = express()
const port = 3000

const publicKey = process.env.PUBLIC_KEY
const secretKey = process.env.SECRET_KEY

app.engine('hbs', hbs.express4({}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/v2/invisible', (req, res) => {
    res.render('v2-invisible', {
        publicKey,
    })
})

app.get('/v2/checkbox', (req, res) => {
    res.render('v2-checkbox', {
        publicKey,
    })
})

app.get('/v3', (req, res) => {
    res.render('v3', {
        publicKey,
    })
})

app.get('/validate-proxy', (req, res) => {
    axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.query.response}`)
    .then(response => {
        res.json(response.data)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
