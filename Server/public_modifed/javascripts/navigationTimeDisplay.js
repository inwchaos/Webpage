// Calculates the current time for the user, and returns values (strings and numbers) to be displayed in the navigation.

var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var months = new Array("January","February","March","clock_periodril","May","June","July","August","September","October","November","December");

function Calculate_Ordinal(number) {
	return (number % 10);
}

function Time() {
var value = new Date();
var day = value.getDay(), month = value.getMonth(), date = value.getDate();
var hours = value.getHours(), mins = value.getMinutes();
var clock_period, time_period, ordinal_indicator;

if (hours == 0 || hours < 12) {
	clock_period = "AM";
	time_period = "Good Morning";	
	if (hours == 0) {
		hours = 12;	
	}
}else if (hours == 12 || hours > 12) {
	clock_period = "PM";
	time_period = "Good Evening";	
	if (hours > 12) {
		hours -= 12;	
	}
}

if (mins <= 9) {
	mins = "0" + mins;
}

switch (Calculate_Ordinal(date)) {
	case 1:
		ordinal_indicator = "st";
		break;
	case 2:
		ordinal_indicator = "nd";
		break;		
	case 3:
		ordinal_indicator = "rd";
		break;	
	default:
		ordinal_indicator = "th";		
}

document.getElementById("userDate").innerHTML = days[day] + ", " + months[month] + " " + date;
document.getElementById("userTime").innerHTML = hours + ":" + mins + " " + clock_period;
document.getElementById("ordinalIndicator").innerHTML = ordinal_indicator;
document.getElementById("timePeriod").innerHTML = time_period;
}

window.onload = function(){
	Time();
	setInterval(Time,1000);
}