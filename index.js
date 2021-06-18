const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const publicKey = process.env.PUBLIC_KEY
const secretKey = process.env.SECRET_KEY


app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
    <head>
        <title>ReCaptcha test</title>
    </head>
    <body>
        <ol>
            <li><a href="/v2/invisible">Click here to test ReCaptcha v2 Invisible</a></li>
            <li><a href="/v2/checkbox">Click here to test ReCaptcha v2 Checkbox</a></li>
            <li><a href="/v3">Click here to test ReCaptcha v3</a></li>
        </ol>
    </body>
</html>
    `)
})

app.get('/v2/invisible', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
     <script>
        function onSubmit(token) {
            document.getElementById('token').value = token
        }
        function copyTokenToClipboard() {
            var tokenInput = document.getElementById("token")
            
            tokenInput.select()
            tokenInput.setSelectionRange(0, 99999) /* For mobile devices */
            
            document.execCommand("copy")
        }
        function validateToken() {
            fetch('/validate-proxy?response=' + document.getElementById("token").value)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                document.getElementById('response').innerHTML = JSON.stringify(json, null, 2)
            })
        }
     </script>
  </head>
  <body>
    <a href="/"><- Back</a>
    <h1>Client Side</h1>
    <form id='demo-form' action="?" method="POST">
      <button class="g-recaptcha" data-sitekey="${publicKey}" data-callback='onSubmit'>Receive token</button>
    </form>
    <br/>
    <div>
        Token: <input type="text" id="token"/><button type="button" onclick="copyTokenToClipboard()">Copy to clipboard</button>
    </div>
    <h1>Server Side</h1>
    <div>
        <button type="button" onclick="validateToken()">Validate token</button>
    </div>
    <br>    
    ReCaptcha Server response:
    <pre id="response">

    </pre>
  </body>
</html>
    `)
})

app.get('/v2/checkbox', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
     <script>
        function onloadCallback() {
            grecaptcha.render('html_element', {
                'sitekey' : '${publicKey}',
                'callback' : verifyCallback,
            })
        }
        function verifyCallback(token) {
            document.getElementById('token').value = token
        }
        function copyTokenToClipboard() {
            var tokenInput = document.getElementById("token")
            
            tokenInput.select()
            tokenInput.setSelectionRange(0, 99999) /* For mobile devices */
            
            document.execCommand("copy")
        }
        function validateToken() {
            fetch('/validate-proxy?response=' + document.getElementById("token").value)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                document.getElementById('response').innerHTML = JSON.stringify(json, null, 2)
            })
        }
     </script>
  </head>
  <body>
    <a href="/"><- Back</a>
    <h1>Client Side</h1>
    <form action="?" method="POST">
      <div id="html_element"></div>
      <br>
    </form>
    <br/>
    <div>
        Token: <input type="text" id="token"/><button type="button" onclick="copyTokenToClipboard()">Copy to clipboard</button>
    </div>
    <h1>Server Side</h1>
    <div>
        <button type="button" onclick="validateToken()">Validate token</button>
    </div>
    <br>    
    ReCaptcha Server response:
    <pre id="response">

    </pre>
  </body>
</html>
    `)
})

app.get('/v3', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
     <script src="https://www.google.com/recaptcha/api.js"></script>
     <script>
        function onSubmit(token) {
            document.getElementById('token').value = token
        }
        function copyTokenToClipboard() {
            var tokenInput = document.getElementById("token")
            
            tokenInput.select()
            tokenInput.setSelectionRange(0, 99999) /* For mobile devices */
            
            document.execCommand("copy")
        }
        function validateToken() {
            fetch('/validate-proxy?response=' + document.getElementById("token").value)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                document.getElementById('response').innerHTML = JSON.stringify(json, null, 2)
            })
        }
     </script>
  </head>
  <body>
    <a href="/"><- Back</a>
    <h1>Client Side</h1>
    <button class="g-recaptcha" 
        data-sitekey="${publicKey}" 
        data-callback='onSubmit' 
        data-action='submit'>Receive token</button>
    <br/><br/>
    <div>
        Token: <input type="text" id="token"/><button type="button" onclick="copyTokenToClipboard()">Copy to clipboard</button>
    </div>
    <h1>Server Side</h1>
    <div>
        <button type="button" onclick="validateToken()">Validate token</button>
    </div>
    <br>    
    ReCaptcha Server response:
    <pre id="response">

    </pre>
  </body>
</html>
    `)
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
