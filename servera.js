var http = require('http');

http.createServer(function(request, response) {
    if (request.method === 'GET'){
    if(request.url === '/codes'){
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var body = [];
    request.on('error', function(err) {
      console.error(err);
    }).on('data', function(chunk) {
      body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        response.on('error', function(err) {
          console.error(err);
        });
      }
    }
    else{
          response.writeHead(404, {'Content-Type': 'application/json'})
          var responseBody = {
          headers: headers,
          body: "Resource not found"
      };
      response.end(JSON.stringify(responseBody))
      }
      else{
          response.writeHead(405, {'Content-Type': 'application/json'})
          var responseBody = {
            headers: headers,
            body: "Method not allowed"
          };
          response.end(JSON.stringify(responseBody))
      }
    }

    var requestedCode = request.url.get('code');
  switch (requestedCode) {
            case 100:
                body = "Continue";
                break;
            case 101:
                body = "Switching Protocols";
                break;
            case 102:
                body = "Processing";
                break;
            case 200:
                body = "OK";
                break;
            case 201:
                body = "Created";
                break;
            case 202:
                body = "Accepted";
                break;
            case 203:
                body = "Non-Authoritative Information";
                break;
            case 204:
                body = "No Content";
                break;
            case 205:
                body = "Reset Content";
                break;
            case 206:
                body = "Partial Content";
                break;
            case 207:
                body = "Multi-Status";
                break;
            case 226:
                body = "IM Used";
                break;
            case 300:
                body = "Multiple Choices";
                break;
            case 301:
                body = "Moved Permanently";
                break;
            case 302:
                body = "Found";
                break;
            case 303:
                body = "See Other";
                break;
            case 304:
                body = "Not Modified";
                break;
            case 305:
                body = "Use Proxy";
                break;
            case 306:
                body = "Reserved";
                break;
            case 307:
                body = "Temporary Redirect";
                break;
            case 400:
                body = "Bad Request";
                break;
            case 401:
                body = "Unauthorized";
                break;
            case 402:
                body = "Payment Required";
                break;
            case 403:
                body = "Forbidden";
                break;
            case 404:
                body = "Not Found";
                break;
            case 405:
                body = "Method Not Allowed";
                break;
            case 406:
                body = "Not Acceptable";
                break;
            case 407:
                body = "Proxy Authentication Required";
                break;
            case 408:
                body = "Request Timeout";
                break;
            case 409:
                body = "Conflict";
                break;
            case 410:
                body = "Gone";
                break;
            case 411:
                body = "Length Required";
                break;
            case 412:
                body = "Precondition Failed";
                break;
            case 413:
                body = "Request Entity Too Large";
                break;
            case 414:
                body = "Request-URI Too Long";
                break;
            case 415:
                body = "Unsupported Media Type";
                break;
            case 416:
                body = "Requested Range Not Satisfiable";
                break;
            case 417:
                body = "Expectation Failed";
                break;
            case 422:
                body = "Unprocessable Entity";
                break;
            case 423:
                body = "Locked";
                break;
            case 424:
                body = "Failed Dependency";
                break;
            case 426:
                body = "Upgrade Required";
                break;
            case 500:
                body = "Internal Server Error";
                break;
            case 501:
                body = "Not Implemented";
                break;
            case 502:
                body = "Bad Gateway";
                break;
            case 503:
                body = "Service Unavailable";
                break;
            case 504:
                body = "Gateway Timeout";
                break;
            case 505:
                body = "HTTP Version Not Supported";
                break;
            case 506:
                body = "Variant Also Negotiates";
                break;
            case 507:
                body = "Insufficient Storage";
                break;
            case 510:
                body = "Not Extended";
                break;
            default:
                throw new Exception("Code not found");
        }
  
      response.writeHead(requestedCode, {'Content-Type': 'application/json'});
          var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };
    response.end(JSON.stringify(responseBody));
}).listen(8080);