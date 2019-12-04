var $ = jQuery.noConflict();
$( document ).ready(function(){
    // Check if main menu exist before initiate script
    if ( $("#mobile-menu").length > 0 ) {
        var $menu = $("#mobile-menu").mmenu({
            offCanvas : {
                position: 'right'
            }
        });
        var $icon = $("#ham-toggle");
        var API = $("#mobile-menu").data("mmenu");
       
        $icon.on("click", function() {
            API.open();
        });
       
        API.bind("open:finish", function() {
            setTimeout(function() {
                $icon.addClass("is-active");
            }, 100);
        });
        API.bind("close:finish", function() {
            setTimeout(function() {
                $icon.removeClass("is-active");
            }, 100);
        });
    }
});