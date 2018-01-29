// prepend bracket line
$('.guidance-per-rule .panel-default').prepend('<div class="bracket-wrap"><span class="bracket-line"></span></div>');

// when the guidance button is clicked, make bracket line sticky (this will not show in Frontify)
$('.open-guidance').click(function(e){
  var panelParent = $(this).parents('.panel-default');
  panelParent.addClass('hb-bracket');
  
  var bracketLine = panelParent.find('.bracket-line');
  $(window).scroll(function(){

    if (bracketLine.length) {
        bracketLine.affix({
            offset: {
                top: function(e) {
                    var bracket = $(e).parents('.panel-default');
                    return (this.top = bracket.offset().top);
                },
                bottom: function(e) {
                    var bracket = $(e).parents('.panel-default'),
                        bracketHeight = bracket.outerHeight(true),
                        windowHeight = $(document).height(),
                        divOffsetTop = bracket.offset().top,
                        delta = windowHeight - ( divOffsetTop + bracketHeight ) + 50;
                    return (this.bottom = delta);
                }
            }
        });
      }
  });

  bracketLine.on( 'affix-bottom.bs.affix', function() {
      $(this).addClass('affixed-bottom');
  });
  bracketLine.on( 'affixed-bottom.bs.affix', function() {
      $(this).addClass('affixed-bottom');
  });
});