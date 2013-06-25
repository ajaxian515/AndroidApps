$(document).ready(function () {

    var GlobalWidth = $('#SSlideShowGallery').width();
    var nWidth = GlobalWidth;// * (90 / 100);
    var nHeight = $('#SSlideShowGallery').height();

    
    $(".DSearchBox").css({ opacity: 1.0 });
    $("#slideshowgallery").css('width', GlobalWidth + 20 + 'px');
    $(".imgbjq-gp").css('width', GlobalWidth + 20 + 'px');


    $('#slideshowgallery').bjqs({
        'width': GlobalWidth + 20,
        'height': nHeight,
        'showMarkers': true,
        'showControls': true,
        'centerMarkers': false,
        'animation': 'slide',
        'automatic': true,
        'hoverPause': true,
        'rotationSpeed': 4000,
        'animationDuration': 1950,
        'centerMarkers': true,
        // Allow navigation with arrow keys
        'keyboardNav': true,
        // Use image title text as caption
        'useCaptions': true

    });


})

