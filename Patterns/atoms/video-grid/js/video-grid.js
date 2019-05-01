$('.iframe-wrap').append('<img src="//www.sra.org.uk/img/play.svg" class="play-button">');

$('.play-button').on('click', function(e) {
 
  $(".iframe-wrap iframe")[0].src += "&autoplay=1";
  e.preventDefault();
  $(this).fadeOut();
             
});