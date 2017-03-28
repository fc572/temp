function arrangeAndDisplay(map) {
  var x = 0,
    j = 0,
    k = 0,
    marker;

  var flag = false,
    iconPin, countTubeNorth = 0,
    countTubeSouth = 0,
    countBikesNorth = 0,
    countBikesSouth = 0;
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
      if (bikeGeoLocationAndName[ßx][3] == 'B') {
        iconPin = bikeSouth;
        countBikesSouth++;
      } else {
        iconPin = tubeSouth;
        countTubeSouth++;
      }
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(bikeGeoLocationAndName[x][1], bikeGeoLocationAndName[x][2]),
        map: map,
        icon: iconPin
      });
      flag = false;
    } else {
      if (bikeGeoLocationAndName[x][3] == 'B') {
        iconPin = bikeNorth;
        countBikesNorth++;
      } else {
        iconPin = tubeNorth;
        countTubeNorth++;
      }
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(bikeGeoLocationAndName[x][1], bikeGeoLocationAndName[x][2]),
        map: map,
        icon: iconPin
      });
    }
  }
  map.countBikesNorth = countBikesNorth;
  map.countTubeNorth = countTubeNorth;
  map.countBikesSouth = countBikesSouth;
  map.countTubeSouth = countTubeSouth;
  return map;
}