function stickySidebar() {
  $('.handbook-sidebar').affix({
    offset: {
      top: 30,
      bottom: 0
    }
  });
}
if ($(window).width() > 974) {
  stickySidebar();
}

$('.open-guidance').click(function(e){
  e.stopPropagation();
  e.preventDefault();
  $('.handbook-wrap').removeClass('sidebar-out');
  $('.handbook-wrap').addClass('sidebar-in');
  $('body').addClass('stop-scroll');
  $('.handbook-sidebar').css('z-index','5');
});
$('.help-back').click(function(){
  $('.handbook-wrap').addClass('sidebar-out');
  setTimeout(function(){
    $('.handbook-wrap').removeClass('sidebar-in');
    $('body').removeClass('stop-scroll');
  },200);
  setTimeout(function(){
    $('.handbook-sidebar').css('z-index','0');
    $('.handbook-help').css('opacity','1');
  },500);
});