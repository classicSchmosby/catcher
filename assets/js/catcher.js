// create variable base
var origDirections;
var newDirections;
var scorer;
// Array of weapon types
var weapons = ['','',''];
// create enemy properties
var enemy = {
	id: 'Test',
	moveable: true,
	weapon: weapons[0]
};
// create option properties
var options = {
	enableHighAccuracy:true,
	timeout:5000,
	maximumAge:Infinity
};
function success(pos) {
	var posi = pos.coords;
	var myPos = { lat: (posi.latitude), lng: (posi.longitude) };
	// alert('lat: ' + posi.latitude + '\n \n' + 'lng: ' + posi.longitude);
	// map-canvas variable
	var map = new google.maps.Map(document.getElementById('map'), {
    	center: myPos,
    	mapTypeId: google.maps.MapTypeId.TERRAIN,
    	zoom: 20
    });
    // marker variable
    var marker = new google.maps.Marker({
    	position: map.center,
    	map: map,
    	draggable: true,
    	// original user-icon

    	// newest user-icon
    	icon: 'assets/img/user2.png',
    	title:('Lat: ' + posi.latitude + '\n' + 'Lng: ' + posi.longitude)
    });
}
function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

function upwards(map, marker, pos) {
	marker.setPosition(new google.maps.LatLng(posi.latitude, posi.longitude));
	marker.panTo(new google.maps.LatLng(posi.latitude + 1.5, posi.longitude + 1.5));
}

navigator.geolocation.getCurrentPosition(success, error, options);