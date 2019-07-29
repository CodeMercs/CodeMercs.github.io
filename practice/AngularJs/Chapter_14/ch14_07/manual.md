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

```
npm install -gd multiparty
```

```
npm install angular-file-upload
```


# Server JS

```
var express = require('express')
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var app = express();
/* file upload */ 

app.post('/fileUpload', function(req,res){
	req.header("Access-Control-Request-Method","POST,OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	var form = new multiparty.Form({uploadDir: './files/'});
	form.parse (req, function(err, fields, files){
		var filesTmp = JSON.stringify(files,null,2);
		if (err) {
			console.log('parse error : ' + err);
		} else {
			console.log('parse error : ' + filesTmp);
			var inputFile = files.file[0];
			var uploadedPath = inputFile.path;
			var dstPath = './files/' + inputFile.originalFilename;
			fs.rename(uploadedPath, dstPath, function(err) {
				if (err) {
					console.log('rename error : ' + err);
				} else {
					console.log('rename ok');
				}
			});
		}
		res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
		res.write('received upload:\n\n');
		res.end(util.inspect({fields: fields, files: filesTmp}));
	});
});

var server = app.listen(9996, function(){
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