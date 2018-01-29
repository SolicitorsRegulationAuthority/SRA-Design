$('.bookmark-link').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);
    if ($this.hasClass('active')) {
        $this.removeClass('active');
    } else {
        $this.addClass('active animate-icon');
        setTimeout(function() {
            $('.bookmark-link').removeClass('animate-icon');
        }, 200);
    }
});