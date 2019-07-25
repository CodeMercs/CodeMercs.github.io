var express = require('express')
var app = express();
var persons = [
	{name:"Kan",age:23,sex:"女"},
	{name:"Jun",age:26,sex:"女"},
	{name:"Chang",age:88,sex:"男"},
	{name:"Richard",age:30,sex:"男"}
]
app.get('/person/:name', function( req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	var name = req.params.name;
	var person;
	persons.forEach(function(element){
		if(name == element.name) {
			person = element;
		}
	});
	if (person != undefined) {
		res.json(person);
	} else {
		res.send("no person found.");
	}
});
var server = app.listen(9998, function(){
	console.log('listening on port %d', server.address().port);
});