$(function () {
    "use strict";

    /*------ MENU Fixed ------*/
    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
        var $navbar = $(".navbar");
        var $header = $(".header-icon-bars ");
        if ($scroll > 100) {
            $navbar.addClass("scroll-nav");
            $header.addClass("bar-color");
        } else {
            $navbar.removeClass("scroll-nav");
            $header.removeClass("bar-color");
        }
    });
$('.hamburger').click(function(){
$(this).toggleClass('active');


});
$('.home-slider').owlCarousel({
    loop:true,
    margin:20,
    items:3,
    dots:false,
    arrow:true,
    nav:true,
    navText: ["<img src='images/left.png'>","<img src='images/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
 
    }
});


$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
// Faqs Page JS //
$(".faq h6").click(function (e) {
    e.preventDefault();
    // $(".heading p").hide();
    $(this).parent().find("p").slideToggle();
    $(this).toggleClass("active");
});
// Faqs Page JS End //

$('.def1').click(function (e){
    e.preventDefault();
   $('.add-to-cart').addClass("active");
   $('body').addClass("color");

});
$('.hide-right').click(function(){
$('.add-to-cart').removeClass("active");
$('body').removeClass("color");
});
$('.hide-card').click(function(){
    $('.frm-show').slideToggle();
    $(this).toggleClass('rotate');
    $('.greeting').toggleClass('frm-hide')
})
});
$('.expnd-btn').click(function(){
   $('.fleur-exper').slideDown();
   $(this).css({'visibility':'hidden' , 'transition': 'all .4s ease-in-out' , 'opacity': '0'});
 

});
$('.reduce-btn').click(function(){
    $('.fleur-exper').slideUp();
    $('.expnd-btn').css({'visibility':'visible' , 'transition': 'all .4s ease-in-out' , 'opacity': '1'});
 
})
if($(window).width() > 767 ){
    $('#open-pop').click(function(){
        $("#myModal22").modal('show');
    });
}
if($(window).width() < 767 ) {
    $('.inner-foter p').click( function(e) {
        e.preventDefault();
        $(this).parent().find('.footer-na').slideToggle();
    });

    $('.gift-img').click( function(e) {
        $(this).parent().find('.gift-para').slideToggle();
        $(this).toggleClass('rotate');
    });
    $('.has-children a').click( function (e) {
        e.preventDefault();
        $(this).parent().find('.sub-menu').slideToggle('slow');
    });
    // Home Page Load Pop-up JS //
$(document).ready(function(){
    $("#myModal22").modal('show');
});

// Home Page Load Pop-up JS End //
}

$('.containercontentWithHeading').click( function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).find('p').slideToggle();
})


