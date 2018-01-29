$('.accordion-results .panel').on('show.bs.collapse', function () {
   $(this).addClass('panel-active');
});

$('.accordion-results .panel').on('hide.bs.collapse', function () {
   $(this).removeClass('panel-active');
});