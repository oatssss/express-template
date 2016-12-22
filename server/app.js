var express = require('express');
var app = express();
var path = require('path');

global.__workd = __dirname + '/';
global.__root = path.join(__workd, '../');

// Static directories
app.use('/static', express.static(path.join(__root, 'server/static')));

// Routes
// Wildcard has to be last
app.get('*', function (req, res) {
    res.sendFile(path.join(__root + 'server/static/index.html'));
});

// Run app on port 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
});