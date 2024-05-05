$(function(){
    $('#cointr').hover(function(){
        $(this).animate({left : '0px'},1000);
    },function(){
        $(this).animate({left : '-100px'},1000)
    })
    $('h3').click(function(){
        $(this).siblings('ul').children().slideToggle();
        $(this).parent().siblings().children('ul').children().slideUp();
    })
})