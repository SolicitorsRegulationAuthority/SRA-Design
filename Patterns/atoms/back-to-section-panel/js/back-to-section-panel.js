// if user scrolls past open section, insert link to go back to it

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } 
        else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();

$(window).scroll(function () {
    var scrollNumber = $('.scroll-number');
    var sidebarTitle = scrollNumber.text();
    var section = $('.rule-number:contains(' + sidebarTitle + ')');
    var sectionParent = section.parents('.panel-default');
    var sectionBracket = section.parents('.hb-bracket');
    var sectionLink = section.parents('.panel-heading').siblings('.panel-collapse').attr('aria-labelledby');
    var backBar = $('.back-bar');
    
    if ((section.length) && (sidebarTitle.length)) {

        var isElementInView = Utils.isElementInView(sectionBracket, false);
        if (isElementInView) {
            $('.level-title a').remove();
            $('.handbook-sidebar').removeClass('out-of-view');
        } else {
            if (!$('.level-title .icon-angle-double-up').length) {
                var angleLink = '<a href="#' + sectionLink + '" class="back-to-rule"><i class="icon-angle-double-up"></i></a>';
                $(angleLink).hide().appendTo('.level-title').fadeIn();
                $(angleLink).hide().appendTo('.handbook-second-level .level-title').fadeIn();

                $('.handbook-sidebar').addClass('out-of-view');
                backBar.attr('href', '#' + sectionLink);
            }
        }
        function log(e) {
            if (e < 0) {
                // if element is above viewport
                $('.level-title i').removeClass('icon-angle-double-down');
            } else if (e > 0) {
                // if element is below viewport
                $('.level-title i').addClass('icon-angle-double-down');
            }
        }
        $(function() {
          var eTop = section.offset().top;
          log(eTop - $(window).scrollTop());
        });
    }
});

// on click of appended link, take user back to open rule
$(document).on('click', '.level-title a', function() {
    $('.handbook-sidebar').addClass('into-view');
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    setTimeout(function(){
        $('.handbook-sidebar').removeClass('into-view');
    }, 400)
});