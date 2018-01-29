$('.open-guidance').click(function(e){
  e.stopPropagation();
  e.preventDefault();
  $('.handbook-wrap').removeClass('sidebar-out');
  $('.handbook-wrap').addClass('sidebar-in');
  $('body').addClass('stop-scroll');
  $('.handbook-sidebar').css('z-index','5');
});

$('.help-links a').click(function(){
  var levelId = $(this).attr('data-target');
  $(levelId).addClass('sidebar-out');
});

$('.back-sidebar').click(function(){
  var currentLevel = $(this).parents('.sidebar-out');
  currentLevel.removeClass('sidebar-out');
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