$(document).ready(function() {

    var cl1 = $("#client1");
    var cl2 = $("#client2");
    var menu = $("#menu");
    var hamburger = $("#hamburger-btn");
    var close = $("#close-btn");
    cl2.hide();
    close.hide();
    setInterval(function() {
        cl1.toggle();
        cl2.toggle();
    }, 5000);
    hamburger.on("click", function() {
        menu.removeClass("menu-display");
        close.show();
        hamburger.hide();
    });
    close.on("click", function() {
        menu.addClass("menu-display");
        close.removeClass("menu-display");
        hamburger.show();
        close.hide();
    });
});