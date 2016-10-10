$.get('https://freegeoip.net/json/')
    .done (function(location)
    {
        $('#country').html(location.country_name);
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);
    });

function SendData()
{
    var Longitude = document.getElementById('longitude').innerHTML;
    var Latitude = document.getElementById('latitude').innerHTML;
    var Country = document.getElementById('country').innerHTML;

    document.getElementById("country_new").value = Country;
    document.getElementById("latitude_new").value = Latitude;
    document.getElementById("longitude_new").value = Longitude;
}

function validateForm()
{
    SendData();
    var y = document.forms["submit_post"]["country_new"].value;
    var z = document.forms["submit_post"]["comment"].value;
    if (y == null || y == "" || z == null || z == "") {
        alert("Please check that you comment below about the place you visit. If you have done this and are not proceeding to the next page, please wait for a few minutes for the page to grab the location of where you are.");
        return false;
    }
}
