// slider
$(document).ready(function() {
    var jqsel_slider = '.cola-slideshow';
    var jqsel_thumb = '.thumb';

    $(jqsel_slider).cycle({
        speed: 600,
        manualSpeed: 300,
        paused: true
    });
    
    $(jqsel_thumb).click(function(){
        var idx = $(this).attr('data-item');
        $(jqsel_slider).cycle('goto', idx);
    });
});

//read more text
$(document).ready(function() {
    var jqsel_content = '.read-more-content';
    var jqsel_btn_showhide = '.show-read-more';

    $(jqsel_content).addClass('hide');

// Set up the toggle.
    $(jqsel_btn_showhide).on('click', function() {
        if($(jqsel_content).hasClass('hide')){
            $(this).html('Hide Details');
        }else{
            $(this).html('Read More');
        }
        $(jqsel_content).toggleClass('hide');
    });
});


