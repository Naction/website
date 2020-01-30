$(window).on('load',function(){
    $('.loader').slideUp(1000);
})
$('body').ripples({
    resolution: 400
});


// $('.fish4').scroll(function(){
//     $()
// })

$('#how').on('click',function(){
    $(this).siblings().slideToggle();
});


$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });