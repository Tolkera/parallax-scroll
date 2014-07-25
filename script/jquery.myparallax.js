(function($, window, document){
    var $window = $(window),
        windowHeight = $window.height();

    $.fn.myParallax = function(options) {
        var settings = $.extend({
            method: 'parallax',
            parallaxElement: '',
            parallaxSpeed: 30,
            mouseSpeed: 30
        }, options );

        return this.each(function(){
            var element = $(this);
            if (settings.method == "parallax") {
                        var parallaxElement = element.find(settings.parallaxElement),
                        scrollStart = element.offset().top - windowHeight;
                        var speedArr= [];
                        var speed = settings.parallaxSpeed;
                        for (var i=0; i<parallaxElement.length; i++) {
                            speed = speed / 2;
                            speedArr.push(speed);
                        }
                    $window.on('scroll', function(){
                        parallaxElement.each(function(){
                            var element = $(this),
                                elemIndex = element.index();
                                yPos = - ( $window.scrollTop() - scrollStart ) / speedArr[elemIndex-1];
                            element.css('transform', 'translateY(' + yPos + 'px)');
                        })
                    })

            } else if(settings.method == "mouse") {
                    $window.on('mousemove', function(e){
                        var pageX = e.pageX;
                        var pageY = e.pageY;
                        element. each(function(){
                            $(this).css({
                                'margin-left': pageX/settings.mouseSpeed,
                                'margin-top':  pageY/settings.mouseSpeed
                            });
                        });
                    })
            }
        })
    };

}(jQuery, window, document));