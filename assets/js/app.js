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