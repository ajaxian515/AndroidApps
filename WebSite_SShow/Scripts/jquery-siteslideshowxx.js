$(document).ready(function () {

    //$('#DTT-Rating').raty();
    
    var GlobalWidth = $('#SSlideShow').width();
    var nWidth = GlobalWidth;// * (90 / 100);
    var nHeight = $('#SSlideShow').height();

    
    $(".DSearchBox").css({ opacity: 1.0 });
    $("#slideshow").css('width', GlobalWidth + 20 + 'px');
    $(".imgbjqs").css('width', GlobalWidth + 20 + 'px');
    $(".DTT-Button").button();

    $('#slideshow').bjqs({
        'width': GlobalWidth + 20,
        'height': nHeight,
        'showMarkers': true,
        'showControls': true,
        'centerMarkers': false,
        'animation': 'fade',
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


    GlobalWidth = $('#SSlideShowGallery').width();
    nWidth = GlobalWidth;// * (90 / 100);
    nHeight = $('#SSlideShowGallery').height();

    $("#slideshowgallery").css('width', GlobalWidth + 20 + 'px');
    $(".imgbjq-gp").css('width', GlobalWidth + 'px');
    
    $('#slideshowgallery').bjqsx({
        'width': GlobalWidth + 20,
        'height': nHeight,
        'showMarkers': false,
        'showControls': true,
        'centerMarkers': false,
        'animation': 'slide',
        'automatic': false,
        'hoverPause': true,
        'rotationSpeed': 4000,
        'animationDuration': 1950,
        // Allow navigation with arrow keys
        'keyboardNav': true,
        // Use image title text as caption
        'useCaptions': false

    });

    

    $('.TblImgGallery>tbody>tr>td>img').mouseover(function (e) {


        $('.DToolTip').fadeIn('slow');
        $('.DToolTip').css('top', e.pageY).css('left', e.pageX - 70);

//        $('#span-mp').html("X Axis : " + e.pageX + " | Y Axis " + e.pageY);

    })

    $('.TblImgGallery>tbody>tr>td>img').mouseout(function (e) {


        $('.DToolTip').fadeOut('slow');
        
        //$('#span-mp').html("X Axis : " + e.pageX + " | Y Axis " + e.pageY);

    })




})

