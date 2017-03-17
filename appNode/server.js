var express = require('express');

var app = express();

var port = 3333;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response){

});

app.get('/codes', function(request, reponse){
	
});

app.listen(process.env.PORT || port, function(err){
	console.log("Server running on port ", port);
});