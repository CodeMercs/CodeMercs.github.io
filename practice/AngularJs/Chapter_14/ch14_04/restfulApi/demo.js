var express = require('express')
var app = express();
app.get('/hello', function( req, res) {
	res.send('Hello Express!')	
});
var server = app.listen(9998, function(){
	console.log('listening on port %d', server.address().port);
});