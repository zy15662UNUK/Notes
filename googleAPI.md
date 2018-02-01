##### API
- Application programming interface
- Exchange data between website and external application
- Send request to the application && Receive data

##### Google map api&& How to set up a map
- https://developers.google.com/maps/?hl=zh-cn
- we need the "web api" && "web server api"
- key: AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM
- Call the google map API
 ```
<head>
  <style>
    html,body{
      height: 100%;
    }
    #map{
      height: 60%;
    }
  </style>
  <script>
    function initMap(){
      // This is the callback function for "callback=initMap" below
      var mapOptions = {
        center: {lat: 51.5, lng:-0.1}, // set the center of map
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.SATELLITE, // set map type to be satellite
      };
      // Create the map by creating the map object
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // Change map type
      map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    }
  </script>

</head>
<body>
  <div id="map"></div>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
  </script>
</body>
```
- Or we can put our script after the map script
```
<body>
  <div id="map"></div>
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY">
  </script>
  <script src="app.js"></script>
</body>
```
- Change map center:
https://stackoverflow.com/questions/19537225/map-setcenter-function-is-not-working-properly

##### How to add marker and infowindow:
-
```
function initMap(){
  // This is the callback function for "callback=initMap" below
  var mapOptions = {
    center: {lat: 51.5, lng:-0.1}, // set the center of map
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.SATELLITE, // set map type to be satellite
  };

  // Create the map by creating the map object
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Change map type
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

  //Create marker1
  var marker1Options = {
    position: {lat: 51.5, lng:-0.1},
    map: map, // map is the object we define above
    title: "This is marker1", // title shown when hover maker1
    dragable: true, //make the marker draggerable
    animation: google.map.Animation.DROP, //animation drop
  };
  var marker1 = new google.maps.Marker(marker1Options);

  //Create infowindow
  var contentString = "<div>This is an infoWindow</div>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString, // set HTML content
    maxWidth: 100,
    });

  //Add listener to infoWindow, show when click the marker1
  maker1.addListener("click", function(){
    infoWindow.open(map,marker1);// infoWindow shown over maker1

    });
  //Create marker2
  var marker2Options = {
    position: {lat: 52.1337, lng:-0.4577},
    title: "This is marker2", // title shown when hover maker1
    dragable: true, //make the marker draggerable
    animation: google.map.Animation.DROP, //animation drop
  };
  var marker2 = new google.maps.Marker(marker2Options);
  marker2.setMap(map); // set map
  marker2.setAnimation(google.map.Animation.BOUNCE); // set Animation
}
```
- Change marker color:https://stackoverflow.com/questions/11064081/javascript-change-google-map-marker-color

##### Show, hide && delete button
-
```
// Create a marker once click on a point of maps
// Add event listener to the map
var markers = [];// An array to collect all the click points
map.addListener("click", function(event){
  var markerOptions = {
    position: event.latLng,
    //map: map,
    //we don't need this property,since we
    //don't want the marker to show unless clicking
    //show button
  };


<!-- 注意！！此处如果需要调用marker的坐标必须用：event.latLng.lat()和event.latLng.lng()。因为event.latLng中的lat和lng都是带有闭包的函数！！ -->

  var marker = new google.maps.Marker(markerOptions);
  //Store the marker in the array
  markers.push(marker);
  });

//Show all the markers in the array
function showMrkers(){
  for(var i=0;i<markers.length;i++){
//Show markers by setting their map property to map
    markers[i].setMap(map);
  }
}

//Hide all the markers in the array
function clearMarker(){
  for(var i=0;i<markers.length;i++){
//Hide markers by setting their map property to null
    markers[i].setMap(null);
  }
}

//Delete all the markers in the array
function deleteMarker(){
  //Clear markers from the map first
  clearMarker();
  //Then clear the data from the array
  markers = [];
  }
}
```

##### Animated drop of markers
- Add marker with delay
```
function addMarkerWithDelay(i){
//Each time the function is called,delay 200ms then execute
  setTimeout(function(){
    markers[i].setMap(map);
    markers[i].setAnimation(google.maps.Animation.DROP);
    },200*i)
//If we use 200 here, all markers will show up at the
//same time 200ms after we click the button.
//so we have to use 200*i,then each marker has its own delay
}
function showMrkers(){
  for(var i=0;i<markers.length;i++){
    addMarkerWithDelay(i);
  }
}
```

##### Direction service:Driving distance & time between New York & Toronto
-
```
//Create a direction service object to use the route method and get a result method
var directionService = new google.maps.DirectionsService();

//Create a DirectionsRender object which we will use to display the route
var directionsRender = google.maps.DirectionsRender();

//Needs to bind DirectionsRender to the map
directionsRenderer.setMap(map);

//Bind to the click event of calculate route button
function calcRoute(){
  var request = {
    origin: "New York",
    destination: "Toronto",
    unitSystem: google.maps.UnitSystem.METRIC,
    //Swich to SI units
    travelMode: google.map.TravelMode.DRIVING,
    //Modes include: DRIVING,WALKING,BYCYCLING,TRANSIT
  };

//Pass the request to the route method and alert the returned results
  directionService.route(request, fucntion(result,status){
    //Check the returned status first, then if it's ok, print the results.
    if(status === google.maps.DirectionsStatus.OK){
      window.alert("The traveling distance is"+result.routes[0].legs[0].distance.text+". The traveling time is "+result.routes[0].legs[0].duration.text);

      //display the route on the map
        directionsRender.setDirections(result);
    }
  });
}
```

##### Geocoding using the Javascript API
- Get the geocoding message by input the name
```
//Create a geocoder object to use the geocode method
var geocoder = new google.maps.Geocoder();

function geocodeAddress(){
  var request = {
    "address":document.getElementById("address").value
  };
  geocoder.geocode(request,function(result,status){
    //result: object, status: string
    if(status === google.maps.GeocoderStatus.OK){
      window.alert("Address coordinates: "+results[0].geometry.location);
      //Set map center with the result value
      map.setCenter(results[0].geometry.location);
      //Set a marker
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
        });
    }else{
      window.alert("Geocode not available: "+status)
    }
  })
}
```

##### Geocoding using the geocoding API (1) - Activity: format Address & get postcode.
- Request format:
1. latLng request https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE
2. address request https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE
- Returns in jason format (context in string object),with 2 elements: "results" && "status"
- Can also return in XML format (context in tree)
```
//Define the marker at the beginning to avoid multiple markers when search for multiple times
var marker;

function geocodeAddress(){
  //Create url, but have to replace address by user input
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+document.getElementById("address").value+"&key=AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE";

  // Here we need jquery to handle the returned jason
  $.getJSON(url,function(data){
    //here data is the JASON file which has been processed to be a object
    //Need to check the status
    if(data.status === "OK"){
      var formattedAddress = data.results[0].formatted_address;
      var latitute = data.results[0].geometry.location.lat;
      var longtitute = data.results[0].geometry.location.lng;
      var postcode;
      // Need to loop through the "address_components" to find the postcode
      $.each(data.results[0].address_components,function(index,element){
        if(element.types === "postal_code"){
          postcode = element.long_name;
          return false  //stop the loop
        }
      });

      //Post the result
      var htmlContent = "<b>Formatted address: </b>"+formattedAddress+"<br/><b>Coordinates: </b>:(lat:"+latitute+", lng: "+longtitute+").<br/><b>postcode: </b>"+postcode+".";
      $("#output").html(htmlContent);

      //Center map
      map.setCenter({lat:latitute,lng:longtitute});

      //Change zoom
      map.setZoom(14);

      //Check if marker is there(if it's undefined)
      if(marker != undefined){
        // if there was a marker, delete it
        marker.setMap(null);
      }

      //Create a marker
      marker = new google.maps.Marker({
        map: map,
        position: {lat:latitute,lng:longtitute},
        animation: google.maps.Animation.DROP;
      });
    }else{
      $("#output").html("Request unsuccessful");
    }
  })
}
```

##### Nearby Search- Javascript API
- Look for stores in a specific radius in London
```
//Need to involve place library in Javascript API Request
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE&libraries=places">
</script>

//Create map
var london = new google.maps.LatLng(51.5,-0.1);

//Create infoWindow
var infowindow = new google.maps.InfoWindow;

// Create a placesService object before using the nearbySearch method
var request = {
  location: london,
  radius: "500",
  types: ["store"]
};
var service = new google.maps.PlacesService(map);

service.nearbySearch(request,function(result,status){
  if(status == google.maps.place.PlacesServiceStatus.OK){
    //Result is an array
    //Loop through them and create marker for each of them
    for(var i=0;i<result.length;i++){
      addMarker(result[i]);
    }
  }
});
function addMarker(address){
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    animation: google.maps.Animation.DROP
  });

  //Add listener to marker
  google.maps.event.addListener(marker,"click",function(){
    //Once a marker is clicked, 1. set content 2.open it
    infoWindow.setContext(place.name);
    infoWindow.open(map,marker);
    });
}
```

##### Autocomplete
-
```
//Need to involve place library in Javascript API Request
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE&libraries=places">
</script>

//Create autocomplete object
var input = document.getElementById("cityInput");
var options = {
  types: ["(cities)"],
};
var autocomplete = new google.maps.places.Autocomplete(input,options);
//Can also be new google.maps.places.Autocomplete(input);Will search all types of location
//Till here the autocomplete has finished


//Center the map to the selected place after selection
autocomplete.addListener("place_changed",onPlaceChanged);
fucntion onPlaceChanged(){
  //Get the selected value
  var place = autocomplete.getPlace();

  //change map center
  map.panTo(place.geometry.location);
}
```
##### 地理定位：获取用户位置
https://developers.google.com/maps/documentation/javascript/geolocation
