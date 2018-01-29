/* Change image URL accordingly */

$('.iframe-wrap').append('<img src="http://sra-framework.staging.iepreview.co.uk/img/play.svg" class="play-button">');

$('.play-button').on('click', function(e) {
 
  $(".iframe-wrap iframe")[0].src += "&autoplay=1";
  e.preventDefault();
  $(this).fadeOut();
             
});