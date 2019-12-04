$(document).ready(function(){
    $("#gallery .list img").click(function(){
        const imageSrc = $(this).attr('src');

        $("#gallery .focus img").fadeOut();

        setTimeout(function(){
            $("#gallery .focus img").attr('src', imageSrc).fadeIn();     
        }, 500);
    });
});