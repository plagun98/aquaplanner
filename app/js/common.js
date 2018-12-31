$('#headerload').load("header.html");
$('#footerload').load("footer.html");
$('#contentload').load("mainpage.html");
window.onload = ()=>{
    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            speed: 600,
            slidesPerRow: 3,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false
        });
        $('.fancybox').fancybox();
      });
    $('#main').click(()=>{
        $('#main').addClass("navitem__active");
        $('#controllers').removeClass("navitem__active");
        $('#led').removeClass("navitem__active");
        $('#contentload').innerHTML="";
        $('#contentload').load("mainpage.html");
    });
    $('#controllers').click(()=>{
        $('#controllers').addClass("navitem__active");
        $('#main').removeClass("navitem__active");
        $('#led').removeClass("navitem__active");
        $('#contentload').innerHTML="";
        $('#contentload').load("controllers.html");
    });
    $('#led').click(()=>{
        $('#led').addClass("navitem__active");
        $('#controllers').removeClass("navitem__active");
        $('#main').removeClass("navitem__active");
        $('#contentload').innerHTML="";
        $('#contentload').load("led.html");
    });
    $('#for__beginners').click(()=>{
        $('#begin__info').toggleClass('begin__info');
    });

}
