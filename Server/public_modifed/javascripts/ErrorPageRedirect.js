// Error Page redirect coutdown JavaScript Document

window.onload = function(){
	var count = 31;
	setInterval(function(){
		if (count > 0) {
			count--;	   
			document.getElementById("errorcountdown").innerHTML = "You will be automatically redirected back in " + count + " seconds......";   
		}else if (count == 0) {  
			document.getElementById("errorcountdown").innerHTML = "Redirecting......";  
		}
	},1000);
}