$(window).on('load',function(){
    $('.loader').slideUp(1000);
})
$('html').ripples({
    resolution: 400
});

$('#how').on('click',function(){
    $(this).siblings().slideToggle();
});


$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){　　//スクロールした量 > 要素からtopまでの高さ - ブラウザの高さ + 100
              $(this).addClass('scrollin');
            }
        });
    });


// $(window).scroll(function (){
//     $('.fadein-left').each(function(){
//         var elemPos = $(this).offset().top,
//             scroll = $(window).scrollTop(),
//             windowHeight = $(window).height();
//         if (scroll > elemPos - windowHeight + 100){
//             $(this).addClass('scrollin');
//             }
//         });
//     });