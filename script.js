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


});