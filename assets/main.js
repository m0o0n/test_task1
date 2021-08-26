$(document).ready(function () {
    var show =  $('.show-sub');
    var hide =  $('.hide-sub');
    var open_menu = $('.wrapper_menu__bar');
    var close_menu = $('.text_and_close i');
    var open_cart = $('.cart');
    var close_cart = $('.cart_menu');
    console.log(show)
    open_cart.on('click', function() {
        var cart = $('.wrapper_cart_container');
        cart.css({"display" : "flex"});
        $('.shape').css({"display" : "block"});
       
    });
    close_cart.on('click', function() {
        var cart = $('.wrapper_cart_container');
        cart.css({"display" : "none"});
        $('.shape').css({"display" : "none"});
       
    });

    $('.shape').on('click', function(){
        var cart = $('.wrapper_cart_container');
        cart.css({"display" : "none"});
        var bar_menu = $('.wrapper_bar-menu_container');
       bar_menu.css({"display" : "none"});
        $('.shape').css({"display" : "none"});
    });
    open_menu.on('click', function() {
        var bar_menu = $('.wrapper_bar-menu_container');
        bar_menu.css({"display" : "flex"});
        $('.shape').css({"display" : "block"});
       
    });
    close_menu.on('click', function() {
       var bar_menu = $('.wrapper_bar-menu_container');
       bar_menu.css({"display" : "none"});
       $('.shape').css({"display" : "none"});
       
    });
    show.on('click', function(e) {
        var target = e.target.parentNode.parentNode
        target.children[0].style.display = "none"
        target.children[1].style.display = "block"
        target.parentNode.parentNode.children[1].style.display = "block"
    });
    hide.on('click', function(e) {
        var target = e.target.parentNode.parentNode
        target.children[0].style.display = "block"
        target.children[1].style.display = "none"
        target.parentNode.parentNode.children[1].style.display = "none"
    });
});