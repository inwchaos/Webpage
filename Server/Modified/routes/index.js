var fs = require('fs');
var file='value.json';
var value_now;

var express = require('express');
var router = express.Router();

router.get('/redirect', function(req, res, next) {
    res.send(
"<!DOCTYPE html>" +
	"<html>" +
		"<head>" +
			'<meta charset="utf-8">' +
			'<meta http-equiv="refresh" content="7; url=./blog.html"/>' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/font-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/navigation-stylesheet.css">' +       
			'<link rel="stylesheet" type="text/css" href="stylesheets/main-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/blog-stylesheet.css">' + 						  
			'<script type="text/javascript" src="javascripts/navigationBar.js"></script>' +
			'<script type="text/javascript" src="javascripts/navigationTimeDisplay.js"></script>' +
        	'<script type="text/javascript" src="javascripts/RedirectPageRedirect.js"></script>' +			
			'<link rel="shortcut icon" type="image/x-icon" href="images/Icons/Derive_Icon.ico">' + 		
			'<title>DÉRIVE</title>' +
		"</head>" +
		"<body>" +
			'<div class="navigationHead">' +  
				'<div class="nameNavigation">' +
					'<h1><a id="navigationLogo" href="home.html">D<span style="color:#FFFFFF">É</span>RIVE</a></h1>' +
				'</div>' +                     
				'<div class="menuIconNavigation">' +
					'<h1 class="openNavigationBar" style="cursor: pointer" onclick="openNavigationBar()">&#9776;</h1>' +
				'</div>' + 
				'<div id="navigationBar" class="navigation">' +
					'<div class="leftNavigation">' +
						'<div class="leftNavigationText">' +   
							'<p><span id="userDate"></span><sup><span id="ordinalIndicator"></span></sup> <span id="userTime"></span> <br> <span id="timePeriod"></span>, ___________.</p>' +           
						'</div>' +
					'</div>' +
					'<div class="rightNavigation">' +
						'<div class="closeNavigationBar" style="cursor: pointer" href="javascript:void(0)" onclick="closeNavigationBar()">&#10005;</div>' +
						'<ul class="navigationLinks">' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="home.html">Home</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="signup.html">Sign Up</a></li> ' +     
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="blog.html">Blog</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="destinations.html">Places Visited</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="about.html">About Us</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="support.html">Support</a></li>' +
						'</ul>' +
					'</div>' +       
				'</div>' + 
			'</div>' + 
			'<div class = "contentContainer ContentText">' +   
				'<div id="content" style="padding-top:120px;padding-bottom:0px">' +
					'<div id="scrollableContent">' +
						'<div id="paddingContent">' +
							'<h3>Your blog submission has been successfully added.</h3>' +
                            '<h4><span id="redirectcountdown"><span></h4>' +
		        			'<h4>If this page does not redirect in 5 seconds, Click "Return" to return to the blog page.<br><button class="blog_post" onclick="goBack()">Return</button></h4>' +			
						'</div>' +
					'</div>' +
				'</div>' +        
			'</div>' +				
		'</body>' +
	'</html>'
    );
});

router.get('/error', function(req, res, next) {
    res.send(
"<!DOCTYPE html>" +
	"<html>" +
		"<head>" +
			'<meta charset="utf-8">' +
			'<meta http-equiv="refresh" content="32; url=./post.html"/>' +			
			'<link rel="stylesheet" type="text/css" href="stylesheets/font-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/navigation-stylesheet.css">' +       
			'<link rel="stylesheet" type="text/css" href="stylesheets/main-stylesheet.css">' + 
			'<link rel="stylesheet" type="text/css" href="stylesheets/blog-stylesheet.css">' + 			 
			'<script type="text/javascript" src="javascripts/navigationBar.js"></script>' +
			'<script type="text/javascript" src="javascripts/navigationTimeDisplay.js"></script>' +
			'<script type="text/javascript" src="javascripts/goback.js"></script>' +
        	'<script type="text/javascript" src="javascripts/ErrorPageRedirect.js"></script>' +						
			'<link rel="shortcut icon" type="image/x-icon" href="images/Icons/Derive_Icon.ico">' + 		
			'<title>DÉRIVE</title>' +
		"</head>" +
		"<body>" +
			'<div class="navigationHead">' +  
				'<div class="nameNavigation">' +
					'<h1><a id="navigationLogo" href="home.html">D<span style="color:#FFFFFF">É</span>RIVE</a></h1>' +
				'</div>' +                     
				'<div class="menuIconNavigation">' +
					'<h1 class="openNavigationBar" style="cursor: pointer" onclick="openNavigationBar()">&#9776;</h1>' +
				'</div>' + 
				'<div id="navigationBar" class="navigation">' +
					'<div class="leftNavigation">' +
						'<div class="leftNavigationText">' +   
							'<p><span id="userDate"></span><sup><span id="ordinalIndicator"></span></sup> <span id="userTime"></span> <br> <span id="timePeriod"></span>, ___________.</p>' +           
						'</div>' +
					'</div>' +
					'<div class="rightNavigation">' +
						'<div class="closeNavigationBar" style="cursor: pointer" href="javascript:void(0)" onclick="closeNavigationBar()">&#10005;</div>' +
						'<ul class="navigationLinks">' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="home.html">Home</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="signup.html">Sign Up</a></li> ' +     
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="blog.html">Blog</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="destinations.html">Places Visited</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="about.html">About Us</a></li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="support.html">Support</a></li>' +
						'</ul>' +
					'</div>' +       
				'</div>' + 
			'</div>' + 
			'<div class = "contentContainer ContentText">' +   
				'<div id="content" style="padding-top:120px;padding-bottom:0px">' +
					'<div id="scrollableContent">' +
						'<div id="paddingContent">' +
         					'<h3>Error!</h3>' +
                           	'<h4>Your blog submission could not be created, <span id="errorcountdown"><span></h4>' +
        					'<h4>Check you have correctly entered in all details, Click "Return" to return to the previous page.<br>' +
							'<button class="blog_post" onclick="goBack()">Return</button></h4>' +
						'</div>' +
					'</div>' +
				'</div>' +        
			'</div>' +				
		'</body>' +
	'</html>'
    );
});

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

