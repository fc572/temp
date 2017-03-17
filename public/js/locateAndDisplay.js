function locationApi(response) {
  var bikeGeoLocationAndName = [];
  for (var i = 0; i < response.length; i++) {
    bikeGeoLocationAndName[i] = [];
    bikeGeoLocationAndName[i][0] = response[i].commonName;
    bikeGeoLocationAndName[i][1] = response[i].lat;
    bikeGeoLocationAndName[i][2] = response[i].lon;
    bikeGeoLocationAndName[i][3] = 'B';
  }
  tubeGeoLocationAndName = tubeCoordinates();
  bikeGeoLocationAndName.push.apply(bikeGeoLocationAndName, tubeGeoLocationAndName);

  var infowindow = new google.maps.InfoWindow();
  riverThamesCoordinates.sort();
  bikeGeoLocationAndName.sort();
  var x = 0, j = 0, k = 0;

  var flag = false, iconPin, countTubeNorth = 0, countTubeSouth = 0, countBikesNorth = 0, countBikesSouth = 0;
  var bikeNorth = new google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=B|1D13EC|000000");
  var bikeSouth = new google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=B|34BE07|000000");
  var tubeNorth = new google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=T|2292E9|000000");
  var tubeSouth = new google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=T|D4FD9D|000000");
  for (; x < bikeGeoLocationAndName.length; x++) {
    for (; j < (riverThamesCoordinates.length - 1); j++) {
      if ((bikeGeoLocationAndName[x][2] >= riverThamesCoordinates[j].lng) && (bikeGeoLocationAndName[x][2] <= riverThamesCoordinates[j + 1].lng)) {
        if (riverThamesCoordinates[j].lat >= bikeGeoLocationAndName[x][1]) {
          flag = true;
        }
      }
    }
    j = 0;

    if (flag) {
      if(bikeGeoLocationAndName[x][3] == 'B'){iconPin = bikeSouth; countBikesSouth++;} else {iconPin = tubeSouth; countTubeSouth++;}
      var marker = new google.maps.Marker({
          position : new google.maps.LatLng(bikeGeoLocationAndName[x][1], bikeGeoLocationAndName[x][2]),
          map : map,
          icon :  iconPin
        });
      flag = false;
    } else {
      if(bikeGeoLocationAndName[x][3] == 'B'){iconPin = bikeNorth; countBikesNorth++;} else {iconPin = tubeNorth; countTubeNorth++;}
    //   var marker = new google.maps.Marker({
    //       position : new google.maps.LatLng(bikeGeoLocationAndName[x][1], bikeGeoLocationAndName[x][2]),
    //       map : map,
    //       icon :  iconPin
    //     });
    // }
    // google.maps.event.addListener(marker, 'click', (function (marker, x) {
    //     return function () {
    //       infowindow.setContent(bikeGeoLocationAndName[x][0]);
    //       infowindow.open(map, marker);
    //     }
    //   })(marker, x));
  } //for

  var legend = document.getElementById('legend');
    var div = document.createElement('div');
    div.innerHTML = "<img src=\"http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=Bn|1D13EC|000000\">  Bikes North of river " + countBikesNorth + "<br/>";
    div.innerHTML += "<img src=\"http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=Bs|34BE07|000000\">  Bikes South of river " + countBikesSouth + "<br/>";
    div.innerHTML += "<img src=\"http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=T|2292E9|000000\">  Tube North of river " + countTubeNorth + "<br/>";
    div.innerHTML += "<img src=\"http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=Ts|D4FD9D|000000\">  Tube South of river " + countTubeSouth;
    legend.appendChild(div);
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    document.getElementById('legend'));
}}
