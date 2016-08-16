// Script for allowing a smooth transiation from either top to bottom or bottom to top. 

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 9400, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});