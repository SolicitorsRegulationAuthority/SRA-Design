function longestList() {
  // find longest string for fake-ol
  var maxWidth = Math.max.apply(null, $('.fake-ol > li > .num1').map(function() {
     return $(this).outerWidth(true);
  }).get());

  var listGap = maxWidth + 25;
  $('.fake-ol > li > .num1').css({'width': maxWidth + 'px', 'margin-left': '-' + listGap + 'px'});
  $('.fake-ol > li > .num1').parent('li').css({'margin-left': maxWidth});
}

if ($(window).width() > 750) {
  longestList();
}