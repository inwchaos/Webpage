ajax_test("https://freegeoip.net/json/")

function ajax_test(location)
{
    $.ajax({ url: location })
    .success(function(location) { 
	var position = location.latitude;
    var position1 = location.longitude;
               
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position, lng: position1},
            zoom: 8
        });
    
    var marker = new google.maps.Marker({
          position: {lat: position, lng: position1},
          map: map
        });    
    
    });
};

