$(document).ready(function(){
    /* curator-feed */
    (function(){
        var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
        i.src = "https://cdn.curator.io/published/e0e576ea-a73c-4548-adca-3835490c6dcf.js";
        e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
        })();
        
    $("#gallery .list img").click(function(){
        const imageSrc = $(this).attr('src');

        $("#gallery .focus img").fadeOut();

        setTimeout(function(){
            $("#gallery .focus img").attr('src', imageSrc).fadeIn();     
        }, 500);
    });
});