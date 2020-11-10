$(document).ready(function() {


/*this for adding class active to links */
 $('.navbar .nav-item .nav-link').click(function() {
$('this').addClass('active-li').siblings().removeClass('active-li');
});

     /*this for scroll button to top*/
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) >= 20) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }
      });

   
/*this for scrolling all nav li*/
$('nav ul li:nth-of-type(1)').click(function() {
          $('html, body').animate({
      scrollTop: ($('header').offset().top)
      },1500);
      });
   $('nav ul li:nth-of-type(2)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top - 50)
      },1500);
      });

   $('nav ul li:nth-of-type(3)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.features').offset().top )
      },1500);
      });

   $('nav ul li:nth-of-type(4)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.subscribe').offset().top )
      },1500);
      });
   $('nav ul li:nth-of-type(5)').click(function() {
          $('html, body').animate({
      scrollTop: ($('footer').offset().top )
      },1500);
      });

   
  

     //end all js style  , .page-loading h3
    
      });

//this for page louding  when started or relouded
$( window ).on( "load", function() {
        $('.main-load').fadeOut(1000);
         $('.spinner').fadeOut(1000);
             $('body').css('overflow','auto');
     });