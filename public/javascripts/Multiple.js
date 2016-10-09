function LoadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var infoWindow = new google.maps.InfoWindow();
    var latlngbounds = new google.maps.LatLngBounds();
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    for (var i = 0; i < locations.length; i++) {
        var data = locations[i]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title
        });
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent("<br style = 'width:auto;min-height:5px;height:auto'>" + "<h1>" + data.title + "</h1>" + "<p>" + data.description + "</p>" + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);
        latlngbounds.extend(marker.position);
    }
    //var bounds = new google.maps.LatLngBounds();
    //map.setCenter(latlngbounds.getCenter());
    //map.fitBounds(latlngbounds);
}