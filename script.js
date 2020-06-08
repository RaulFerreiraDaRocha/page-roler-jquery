jQuery(document).ready(function(){
//I define the anchors and look for the element on the page.
	$('#go_home,#go_home2').click(function(){
    
    $('html, body').animate({
		          scrollTop: $("#home").offset().top
	                  },4000);
    return false;
     });
    });
