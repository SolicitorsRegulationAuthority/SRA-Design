$('.iframe-wrap').append('<img src="//www.sra.org.uk/img/play.svg" class="play-button">');

$('.iframe-wrap').on('click', function (e) {
    this.querySelector('iframe').src += '&autoplay=1';
    e.preventDefault();
    $(this).find('.play-button').fadeOut();

});