$('.copy-link').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('active animate-icon');
  setTimeout(function() {
      $('.copy-link').removeClass('animate-icon');
  }, 200);
  if ($(this).text() == 'Copy highlighted section to clipboard') {
  // change only the text, not the html
   $(this).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith("Section copied to clipboard");
  } else {
    $(this).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith("Copy highlighted section to clipboard"); 
  }
});