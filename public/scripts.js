function onCaptchaTokenReceived(captchaToken) {
    getElementByIdAndAssignValue('captchaTokenField', captchaToken)
}

function validateToken(captchaToken) {
    sendRequestToValidateToken(captchaToken)
        .then(jsonResponse => {
            getElementByIdAndAssignHTML('serverResponse', formatJSON(jsonResponse))
        })
}

function sendRequestToValidateToken(captchaToken) {
    return fetch(`/validate-token?response=${captchaToken}`)
        .then((res) => {
            return res.json()
        })
}

function formatJSON(json) {
    return JSON.stringify(json, null, 2)
}

function getElementByIdAndRetrieveValue(id) {
    return document.getElementById(id).value
}

function getElementByIdAndAssignValue(id, value) {
    document.getElementById(id).value = value
}

function getElementByIdAndCopyValueToClipboard(id) {
    var tokenInput = document.getElementById(id)

    tokenInput.select()
    tokenInput.setSelectionRange(0, 99999) /* For mobile devices */

    document.execCommand('copy')
}

function getElementByIdAndAssignHTML(id, html) {
    document.getElementById(id).innerHTML = html
}
