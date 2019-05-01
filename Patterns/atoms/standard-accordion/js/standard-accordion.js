document.addEventListener("DOMContentLoaded", accordionHide, false);
function accordionHide(){
  var anchorFound = anchorCheck(); 
  if(!hidden && !anchorFound){
    var listAccordions = document.querySelectorAll('.accordion .panel-collapse');
    for(var i = 0; i < listAccordions.length; i++){
     listAccordions[i].classList.remove('in'); 
    }
  }
  else if (!hidden && anchorFound){
    for (var i = 0; i < listAccordions.length; i++){
            if(listAccordions[i].innerHTML.indexOf('id='+anchorFound) > -1 )
               {continue;}
            else {
               listAccordions[i].classList.remove('in');
               }
            }
        }
  var hidden = true;
}
  
function anchorCheck(){
  window.location.hash.split('#')[1];
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

     