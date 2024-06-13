//NAVBAR
/*
var nav = $('nav a');
var burger = $(".menu-toggle");

TweenMax.staggerFrom(nav, 2, {y:-20,autoAlpha:0,ease:Power4.easeOut,delay:2},.1);
TweenMax.from(burger, 1, {y:-20,autoAlpha:0,ease:Power4.easeOut,delay:2.5});
*/

//NAV FUNCTION FOR MOBILE
$('#burger-button').click(function () {
    $('.ham-menu').addClass('visible');
});
$('.closeit').click(function () {
    $('.ham-menu').removeClass('visible');
});