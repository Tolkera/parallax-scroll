$(function(){
    $(window).on('scroll', function(){
        var windowHeight = $(window).height();
        $('.scrolling').each(function(){
            var scrolling = $(this),
                scrollStart = scrolling.offset().top - windowHeight,
                parallax = $(this).find('.parallax');
            parallax.each(function(){
                var yPos = (-($(window).scrollTop() - scrollStart) / $(this).data('speed')),
                    coords = yPos + 'px';
                $(this).css('transform', 'translateY(' + coords + ')');
            })
        })
    })

    $(window).on('mousemove', function(e){

        var pageX = e.pageX;
        var pageY = e.pageY;

        $('.cat').css({
            'margin-left': pageX/30,
            'margin-top':  pageY/30
        });

        $('.house').css({
            'margin-left': pageX/100,
            'margin-top':  pageY/100
        })
    })

});