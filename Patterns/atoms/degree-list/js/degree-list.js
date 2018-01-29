// hide degree courses if more than one
$('.degree-list').each(function(){
  if ($(this).find('li').length > 1) {
    $(this).children('ul').hide();
    $(this).children('.icon').after('<span class="degree-toggle">Show  courses</span>');
  }
  else {
    $(this).addClass('degree-single');  
  }
});
$('.degree-toggle').click(function(){
  $(this).parent('.degree-list').find('ul').toggle();
  if ($(this).text() == 'Show courses') {
      $(this).text('Hide courses');
  } else {
      $(this).text('Show courses');
  }
});