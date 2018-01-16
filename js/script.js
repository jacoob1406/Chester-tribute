$(window).on('load', function () { // makes sure the whole site is loaded 
    $('.loader-circle').fadeOut(); // will first fade out the loading animation 
    $('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow': 'visible'});
});

$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 40
        }, 500);
    });


    $('#menu').click(function () {
        $('#ulnav').toggleClass('active');
    });

    $('#ulnav').click(function () {
        $(this).toggleClass('active');
    });


    function coverVideo() {
        var windowTop = $(window).scrollTop();
        $(".video-container").css("top", windowTop * 1 + 'px');
    }

    function hideDate() {
        if ($(this).scrollTop() > 200)
        {
            $('.heading').fadeOut();
        } else
        {
            $('.heading').fadeIn();
        }
    }

    function showPics() {
        const h = 15500;
        if ($(this).scrollTop() > h)
        {
            $('#col1').fadeIn("slow");
        }
    }

    $(window).scroll(function () {
        hideDate();
        showPics();
        coverVideo();
    });
});
