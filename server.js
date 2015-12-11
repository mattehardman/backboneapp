var connect = require('connect');
var serveStatic = require('serve-static');

var PORT = 3000;

var app = connect();

app.use(serveStatic(__dirname));
app.listen(PORT);

console.log("Server connected on port " + PORT);
