function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(40.2067308, -74.7648404),
    zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
