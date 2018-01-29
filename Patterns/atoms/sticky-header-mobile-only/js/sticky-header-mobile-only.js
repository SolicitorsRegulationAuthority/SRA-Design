$('.hb-title-sticky').affix({
  offset: {
    top: 300,
    bottom: function () {
      return (this.bottom = $('.footer-wrapper').outerHeight(true))
    }
  }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   var titleSticky = $('.hb-title-sticky');
   if ((st > lastScrollTop) && lastScrollTop >= 50 && st > 50){
       titleSticky.addClass('down-nav');
       titleSticky.removeClass('up-nav');
   } else {
      titleSticky.addClass('up-nav');
      titleSticky.removeClass('down-nav');
      if (st <= 50) {
        titleSticky.removeClass('up-nav');
      }
   }
   lastScrollTop = st;
});