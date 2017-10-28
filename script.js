var map;

var styles = [
  {
    "featureType": "water",
    "stylers": [
      { "color": "#383f47" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "labels.icon",
    "stylers": [
      { "color": "#e03e25" }
    ]
  },{
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "off" }
    ]
  }
]

var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

function allMap() {
  var myCenter = new google.maps.LatLng(40, 0);
  var mapProp = {
    center:myCenter,
    zoom:2,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    navigationControl: false,
    draggable: true,
    disableDoubleClickZoom: true,
    // mapTypeId:google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  removeBtnStyles();
  $('#allbtn').attr("style", "background-color: #d7422a; color: #fff;");

  dropMarker (22.888979, 79.421551, "India: 2 Companies");
  dropMarker (55.389926, 85.369454, "Russia: 1 Company");
  dropMarker (25.261275, 55.268259, "UAE: 14 Companies");
  dropMarker (33.889697, 35.495694, "Lebanon: 1 Company");
  dropMarker (1.354146, 103.870900, "Singapore: 2 Companies");
  dropMarker (49.049777, 31.530305, "Ukraine: 1 Company");
  dropMarker (42.176812, 43.556356, "Georgia: 1 Company");
  dropMarker (39.496791, -2.972935, "Spain: 3 Companies");
  dropMarker (62.043467, 26.232601, "Finland: 1 Company");
  dropMarker (7.983545, -1.198485, "Ghana: 1 Company");
  dropMarker (31.864983, -6.589051, "Morocco: 1 Company");
  dropMarker (60.124101, -111.275670, "Canada: 1 Company");
  dropMarker (39.739230, -101.398703, "USA: 1 Company");
}

function changeMap(x, y, z) {
  var location = new google.maps.LatLng(x, y);
  var mapProp = {
    center:location,
    zoom:z,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    navigationControl: false,
    draggable: true,
    disableDoubleClickZoom: true,
    // mapTypeId:google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}

function dropMarker(x, y, t) {
  var infowindow = new google.maps.InfoWindow({
    content: t
  });

  var location = new google.maps.LatLng(x, y);

  var marker = new google.maps.Marker({
    position:location,
    title: t,
    icon: "red-dot.png"
  });

  marker.setMap(map);

  infowindow.open(map, marker);

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

function removeBtnStyles() {
  $('#allbtn').removeAttr("style");
  $('#menabtn').removeAttr("style");
  $('#asiabtn').removeAttr("style");
  $('#europebtn').removeAttr("style");
  $('#africabtn').removeAttr("style");
  $('#americasbtn').removeAttr("style");
}

function menaMap() {
  changeMap(30, 50, 4);
  dropMarker (25.261275, 55.268259, "UAE: 14 Companies");
  dropMarker (33.889697, 35.495694, "Lebanon: 1 Company");
  removeBtnStyles();
  $('#menabtn').attr("style", "background-color: #d7422a; color: #fff;");
}

function asiaMap() {
  changeMap(50, 90, 2);
  dropMarker (55.389926, 85.369454, "Russia: 1 Company");
  dropMarker (22.888979, 79.421551, "India: 2 Companies");
  dropMarker (1.354146, 103.870900, "Singapore: 2 Companies");
  removeBtnStyles();
  $('#asiabtn').attr("style", "background-color: #d7422a; color: #fff;");
}

function europeMap() {
  changeMap(48, 10, 3);
  dropMarker (49.049777, 31.530305, "Ukraine: 1 Company");
  dropMarker (42.176812, 43.556356, "Georgia: 1 Company");
  dropMarker (39.496791, -2.972935, "Spain: 3 Companies");
  dropMarker (62.043467, 26.232601, "Finland: 1 Company");
  removeBtnStyles();
  $('#europebtn').attr("style", "background-color: #d7422a; color: #fff;");
}

function africaMap() {
  changeMap(10, 10, 3);
  dropMarker (7.983545, -1.198485, "Ghana: 1 Company");
  dropMarker (31.864983, -6.589051, "Morocco: 1 Company");
  removeBtnStyles();
  $('#africabtn').attr("style", "background-color: #d7422a; color: #fff;");
}

function americasMap() {
  changeMap(50, -90, 3);
  dropMarker (60.124101, -111.275670, "Canada: 1 Company");
  dropMarker (39.739230, -101.398703, "USA: 1 Company");
  removeBtnStyles();
  $('#americasbtn').attr("style", "background-color: #d7422a; color: #fff;");
}

google.maps.event.addDomListener(window, 'load', allMap);
