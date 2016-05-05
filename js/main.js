

//Back to top
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

});

$('document').ready(function() {
    $('.first').delay('700').fadeTo('700', 1);
    $('.second').delay('1000').fadeTo('700', 1);
    $('.third').delay('1300').fadeTo('700', 1);
    $('.intro-text').delay('1600').fadeTo('700', 1);

    $('.show').on('click', function(event) {
        var cl = $('.contact-list');
        $('.talk-to-me').removeClass('show');
        $('.talk-to-me').add('go-away');

        cl.animate({
            'left': '-4px',
            'opacity': 0.9
        }, 600);
        event.preventDefault();
    });

    $('.go-away').on('click', function(event) {
      console.log("bla is " +event.type + "type");

        alert('vhjkl');
        // $('.contact-list').addClass('hinge');
        // $('.talk-to-me').removeClass('go-away');
    });
});

$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});
