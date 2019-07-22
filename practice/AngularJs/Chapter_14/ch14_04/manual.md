# NPM

```
npm install -gd express
```

```
npm install -gd express-generator

```

```
npm install -gd express

```

```
npm install express –save
```


# Demo JS

```
var express = require('express')
var app = express();
app.get('/hello', function( req, res) {
	res.send('Hello Express!')	
});
var server = app.listen(9998, function(){
	console.log('listening on port %d', server.address().port);
});
```

## Run Demo

```
node dome.js
```

# Server JS

```
var express = require('express')
var app = express();
var persons = [
	{"name":"Kan","age":23,"sex":"女"},
	{"name":"Jun","age":26,"sex":"女"},
	{"name":"Chang","age":88,"sex":"男"},
	{"name":"Richard","age":30,"sex":"男"}
]
app.get('/listPersons', function( req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send(persons)	
});
var server = app.listen(9998, function(){
	console.log('listening on port %d', server.address().port);
});
```

## Run

```
node server.js
```

# Angular JS Page

```
php -S 0.0.0.0:9999
```