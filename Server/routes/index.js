var fs = require('fs');
var file='value.json';
var value_now;

var express = require('express');
var router = express.Router();

router.get('/redirect', function(req, res, next) {
    res.send(
        "<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        '<meta charset="utf-8">' +
        '<meta http-equiv="refresh" content="2; url=./blog.html"/>' +
        "<title>Redirecting</title>" +
        "</head>" +
        "<body>" +
        '<p>Thank you for your submission.</p>' +
        '<p>You will now be redirected back to the Home Page.</p>' +
        '</body>' +
        '</html>'
    );
});

router.get('/error', function(req, res, next) {
    res.send(
        "<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        '<meta charset="utf-8">' +
        "<title>Redirecting</title>" +

        '<script>' +
        'function goBack() {' +
            'window.history.back();' +
        '}' +
        '</script>' +

        "</head>" +
        "<body>" +
        '<p>Invalid!</p>' +
        '<p>You have not entered in all details. Click on "Go Back" to go back to the previous page.</p>' +
        '<button onclick="goBack()">Go Back</button>' +
        '</body>' +
        '</html>'
    );
});

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

