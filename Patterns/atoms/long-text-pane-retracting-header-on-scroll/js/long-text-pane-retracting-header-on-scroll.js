$('#hb-guidance').on('scroll', function(){
    if ($(this).scrollTop() > 50) {
        $('#hb-guidance .pane-title').addClass('fixed');
    } else {
        $('#hb-guidance .pane-title').removeClass('fixed');
    }
});