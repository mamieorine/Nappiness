const locations = [{
		coordinates: {lat: 13.7583258, lng: 100.5042345},
		marker: {
            path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
            fillColor: '#ffa600',
            fillOpacity: 1,
            // anchor: new google.maps.Point(0,0),
            strokeWeight: 0,
            scale: 0.18
        },
    }
];
  
let markers = [];
let map;
let infowindow;

// Initialize map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	zoom: 18,
	center: {lat: 13.7583258, lng: 100.5042345}
  });
  dropMarkers(locations);
}

function dropMarkers(place) {
	for (var i = 0; i < place.length; i++) {
	  markerTimeout(place[i], i * 250);
	}
}


// Create indiviual marker
function markerTimeout(location, timeout) {
	
	window.setTimeout(function() {
			
	//var markerIcon = { url: location.marker }

	var marker = new google.maps.Marker({
		icon: location.marker,
		position: location.coordinates,
		map: map,
		animation: google.maps.Animation.DROP,
	});

	markers.push(marker);
	}, timeout);
}

