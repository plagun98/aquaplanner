$('#controllers__load').load("controllers.html");
$('#headerload').load("header.html");
$('#footerload').load("footer.html");
window.onload = ()=>{
    $(document).ready(function(){
        $('.slider').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            dots: true,
            speed: 600,
            slidesPerRow: 3,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false
        });
        $('.fancybox').fancybox();
        $('.fancybox__holders').fancybox();
    });

}
$('body').append('<div class="home__anchor"><i class="fas fa-angle-up"></i></div>');
$('.home__anchor').click(()=>{
    $('body, html').animate({scrollTop: 0}, 0);
});
$(window).scroll(()=>{
    var scrolled = ($(window).scrollTop());
    if(scrolled > 400){
        $(".home__anchor").css("display","block");
    } else {
        $(".home__anchor").css("display","none");
    }
});
