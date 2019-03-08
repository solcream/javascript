var gMapAPIKey = `AIzaSyCCfF-nsjKFSLgoZ5LU_EKRvJzcRBdKjBk`;

var map;
function initMap() {
    map = new google.maps.Map(document.getElementByld(`hplus-map`), {
    center: {lat: -34.397, ing: 150.644},
    zoom: 8
});
}