var app = require('../../server.js')

console.log('here');
var port = process.env.PORT || 8000;
app.listen(port);
console.log('listening on:', port);