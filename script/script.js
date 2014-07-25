$(function(){

    $('.scrolling').myParallax({
        method: 'parallax',
        parallaxElement: '.parallax',
        parallaxSpeed: 20
    }).addClass('test');

    $('.cat').myParallax({
        method: 'mouse',
        mouseSpeed: 30
    });

    $('.house').myParallax({
        method: 'mouse',
        mouseSpeed: 80
    })
});