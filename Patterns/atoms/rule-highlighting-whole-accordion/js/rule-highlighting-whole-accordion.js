$('.open-guidance').hover(function(){
    var $this = $(this);
    $this.parent('.group-wrap').addClass('highlight');

    if ($this.parents('.panel-title').length) {
        var list = $this.parents('.panel-default').find('.panel-body > .list-complex');
        if (!list.find('> dt').length) {
            list.find('> dd').addClass('highlight-dd');
        }
    }
    if ($this.parents('.accordion').hasClass('guidance-per-rule')) {
        $this.parents('.group-wrap').addClass('highlight');
    }

    }, function() {

    $('.group-wrap').removeClass('highlight');

    $('dd').removeClass('highlight-dd');
    $('.panel-body').removeClass('highlight');
});
