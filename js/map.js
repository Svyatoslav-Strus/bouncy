function initMap() {
    var uluru = {lat: 49.5685341, lng: 34.5853751};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var image = 'img/favicon.png';
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image
    });
};