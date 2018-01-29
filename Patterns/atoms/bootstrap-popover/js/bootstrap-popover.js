// initialise popovers
$('[data-toggle="popover"]').popover({trigger:'click'});

// only show one popover at a time
$('[data-toggle="popover"]').on('click', function (e) {
  $(this).popover('show');
  $('[data-toggle="popover"]').not(this).popover('destroy');
});

// close popover if close button clicked
$(document).on("click", ".popover .pop-footer span" , function(){
  var popLink = $(this).parents('.popover').prev('a[data-toggle="popover"]');
  $(this).parents('.popover').popover('destroy');
});