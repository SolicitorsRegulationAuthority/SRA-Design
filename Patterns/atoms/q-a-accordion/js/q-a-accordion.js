$(document).on('click', '.open-all', function(e) {
   var $this = $(this);
   var clicks = $this.data('clicks');
   var accordion = $this.next('.accordion');
   if (clicks) {
       accordion.find('.panel-collapse').collapse('hide');
       accordion.find('.accordion-more').text('More');
       $this.text('Open all');
   } else {
       accordion.find('.panel-collapse').collapse('show');
       accordion.find('.accordion-more').text('Less');
       $this.text('Close all');
   }
   $(this).data("clicks", !clicks);
   return false;
});

$('.panel-title a').click(function(){
   var openLink = $(this).find('.accordion-more');
   if (openLink.text() == 'More') {
       openLink.text('Less');
   } else {
       openLink.text('More');
   }
});