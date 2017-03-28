function getApiRequest(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);

	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(JSON.parse(xmlHttp.responseText));
	};
}