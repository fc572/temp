var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var url = require("url");
var express = require("express");

var server = http.createServer(function(request, response) {
  var filePath = false;
console.log(request.url, " RWEEEWEW");

var urlparsed = url.parse(request.url, true)
     console.log(urlparsed);

var app = express();

app.use(express.static("public"));

app.get('/codes', function(request, response){
  var urlparsed = url.parse(request.url, true);
     console.log(urlparsed);
     var splitted = urlparsed.search.split("=");
     var requestedCode = splitted[1];
     filePath = "public" + urlparsed.pathname + ".html";
     data = requestedCode;
});

  var absPath = "./" + filePath;
  serverWorking(response, absPath);

});

var port_number = server.listen(process.env.PORT || 3333);

function send404(response) {
  response.writeHead(404, {"Content-type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exists) {
    if (exists) {
      fs.readFile(absPath, function(err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}