var gMapAPIKey =  `AIzaSyCCfF-nsjKFSLgoZ5LU_EKRvJzcRBdKjBk`;

var map;
function initMap() {
	
	var storeLocation = {lat: 34.1031131, ing: -118.326343};
	map = new google.maps.Map(document.getElementById('hplus-map'), {
         `center` = storeLocation,
		'zoom' : 12,
		'mapTypeId' : google.maps.MapTypeId.ROADMAP,
		'draggable' : false,
		'scrollwheel' : false
	});

	var marker = new google.maps.marker({
		´position : storeLocation,
		´map: map,
	´title : ´hplus sport in Los Angeles (actuallyCapitol Records in real life)´
})
}