$('.back-top').affix({
    offset: {
          top: 900,
          bottom: function () {
            return (this.bottom = $('.footer-wrapper').outerHeight(true));
        }
     }
  });

  $('.js-search-show').click(function(e){
    $('.search-box-xs').slideToggle(300);
    e.preventDefault();
  });


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

 $('.accordion-results .panel').on('show.bs.collapse', function () {
    $(this).addClass('panel-active');
 });
 
 $('.accordion-results .panel').on('hide.bs.collapse', function () {
    $(this).removeClass('panel-active');
 });


 
 $('.panel-title a').click(function(){
    var openLink = $(this).find('.accordion-more');
    if (openLink.text() == 'More') {
        openLink.text('Less');
    } else {
        openLink.text('More');
    }
 });


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

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
 });

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


  
  // initialise Masonry grid
  jQuery(window).on('load', function(){ 
      var $ = jQuery;
      $('.search-card-wrap').show();
      function masonryCards() {
          $('.search-card-wrap').masonry({
              itemSelector: '.grid-item',
              gutter:25,
              percentPosition: true
          });
      }
      // initialise only on desktop
      if ($(window).width() > 974) {
          masonryCards();
      }
      $(window).resize(function() {
          if ($(window).width() > 974) {
              masonryCards();
          }
      });
  });

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

$('.custom-select').prepend('<i class="icon icon-select-arrows"></i>');

$('.iframe-wrap').append('<img src="http://sra-framework.staging.iepreview.co.uk/img/play.svg" class="play-button">');

$('.play-button').on('click', function(e) {
 
  $(".iframe-wrap iframe")[0].src += "&autoplay=1";
  e.preventDefault();
  $(this).fadeOut();
             
});

$('.iframe-wrap').append('<img src="http://www.sra.org.uk/img/play.svg" class="play-button">');

$('.play-button').on('click', function(e) {
 
  $(".iframe-wrap iframe")[0].src += "&autoplay=1";
  e.preventDefault();
  $(this).fadeOut();
             
});

