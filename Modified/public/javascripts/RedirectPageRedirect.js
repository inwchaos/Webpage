// Error Page redirect coutdown JavaScript Document

window.onload = function(){
	var count = 6;
	setInterval(function(){
		if (count > 0) {
			count--;	   
			document.getElementById("redirectcountdown").innerHTML = "You will now be automatically redirected in " + count + " seconds......";   
		}else if (count == 0) {  
			document.getElementById("redirectcountdown").innerHTML = "Redirecting......";  
		}
	},1000);
}