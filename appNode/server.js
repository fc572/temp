var express = require("express");
var ejs = require("ejs");

var app = express();

var port = 3333;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response){

});
//app.get('/httpcodes/10?', [function sends 101 and message, function sends 200]);

app.get('/httpcodes/:id', function(request, response){
	var id = request.params.id;
	console.log("THIS IS ID ", id);
	if(id > 99 && id < 101){
		response.send("You asked a 100, please send a request body or the browser will timeout");
		response.setTimeout(1000, response.writeContinue());
	}
	else if(id == 301){
		response.redirect(301, ".views/301redirect.html");
	}
	else if(checkStatus(id)){
		response.sendStatus(id);
	}
	else{
		response.status(404).send("We could not find the status you are requesting, hence we return you a 404");
	}
});

app.listen(port, function(){
	console.log("server started on port ", port);
});

function checkStatus(status){
	var statusInt = parseInt(status);
	var statuses = [100,101,200,201,202,203,204,205,207,208,226,300,301,302,303,304,305,306,307,308,
				400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,421,422,
				423,424,425,426,427,428,429,430,431,451,500,501,502,503,504,505,506,507,508,509,510,511];
	return (statuses.indexOf(statusInt) > -1);
}
