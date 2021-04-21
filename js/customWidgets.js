/*
$(document).ready(function () {

    // LARGE CIRCLE
    var mouseX = 0, mouseY = 0;
    var xp1 = 0, yp1 = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 15;
      mouseY = e.pageY - 15; 
    });
      
    setInterval(function(){
      xp1 += ((mouseX - xp1)/6);
      yp1 += ((mouseY - yp1)/6);
      $("#large_circle").css({left: xp1 +'px', top: yp1 +'px'});
    }, 50);
  
    // SMALL CIRCLE
    var mouseX2 = 0, mouseY2 = 0;
     
    $(document).mousemove(function(m){
      mouseX2 = m.pageX - 2;
      mouseY2 = m.pageY - 2; 
    });
      
    setInterval(function(){
      $("#small_circle").css({left: mouseX2 +'px', top: mouseY2 +'px'});
    }, 0);
  });


  */

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");


})

 
$(document).ready(function () {

    //Cookie popup
    if ($.cookie('noShowWelcome')){

    }
    else {
        setTimeout(function(){
            // Display the div containing the class "bottomdiv"
            $(".cookie-consent-banner").show();
        }, 500);
        $.cookie('noShowWelcome', true);  

    }


    $('.cookie-consent-banner__actions').click(function() {
        $('.cookie-consent-banner').css("display","none");
      });

    // Nav Responsive
    $('#nav-responsive').click(function() {
      $(this).toggleClass('open');
      $("nav").toggleClass("visibility");
    });

    // SCROLLING TEXT SECTION
    $(window).scroll(function () {
        var wScroll_1 = -$(this).scrollTop();
        var wScroll_2 = $(this).scrollTop();

        $('.scrolling-text-left').css({
            'transform' : 'translate('+wScroll_1+'px)'
        });


        $('.scrolling-text-right').css({
            'transform' : 'translate('+wScroll_2+'px)'
        });
    });


    // NAVIGATION SCROLL WHEN CLICK ON LINK
    $('nav ul li a').on('click', function (e) {
        var targetSec = $(this).text();
        $('html, body').animate({
           scrollTop: $('#' + targetSec).offset().top
        }, 600);
    
    });

    // FOOTER SCROLL WHEN CLICK ON LINK
    $('.footer-menu ul li a').on('click', function (e) {
      var targetSec = $(this).text();
      $('html, body').animate({
         scrollTop: $('#' + targetSec).offset().top
      }, 600);
  
    });


    //Hover on projects to make the image visible

    $('.project-item.btn.btn--animation-from-right').eq(0).hover(function(){
        $('.project-image').eq(0).addClass('active');
        },function(){
        $('.project-image').eq(0).removeClass('active');
    });

    $('.project-item.btn.btn--animation-from-right').eq(1).hover(function(){
        $('.project-image').eq(1).addClass('active');
        },function(){
        $('.project-image').eq(1).removeClass('active');
    });

    $('.project-item.btn.btn--animation-from-right').eq(2).hover(function(){
        $('.project-image').eq(2).addClass('active');
        },function(){
        $('.project-image').eq(2).removeClass('active');
    });

    //Contact Form css
    $("#contactForm").submit(function(e) {
      //e.preventDefault();
      $(".form-element").css("display","none");
      $(".submit-button").css("display","none");
      $(".thank-you").addClass("active");
      console.clear();
    });    

});







$(window).resize( function() {
    var width = $(window).width();

    if (width>=1000) {
        window.location.href = window.location.href;
        console.log('works')
    }

});


