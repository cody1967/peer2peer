
function initMap(locations) { 
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 39.73215, lng: -111.12028, },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  
  document.getElementById("map").append(map)

}
//  set locations for the input bars on the html page 

 const locations = [];



 const DirectionsService = DirectionsService.route(DirectionsRequest)
 
