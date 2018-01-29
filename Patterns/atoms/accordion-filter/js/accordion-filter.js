$('.accordion-filters .panel').on('show.bs.collapse', function () {
     $(this).addClass('panel-active');
});

$('.accordion-filters .panel').on('hide.bs.collapse', function () {
     $(this).removeClass('panel-active');
});

if ($(window).width() <= 750) {
    $('#filters-all').removeClass('in');
}

$('#filters-all .panel-body').show();