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
