$('#quick-contact').on("click", function(){
    $('#twitter-btn').toggleClass('transition-twit');
    $('#linkedin-btn').toggleClass('transition-linkedin');
    $('#github-btn').toggleClass('transition-github');
});

$('.social').hover(function(){
    $(this).toggleClass("blue-grey-text");
    $(this).toggleClass("social-hover");
    $(this).toggleClass("yellow-text");

    console.log('hovered');
});