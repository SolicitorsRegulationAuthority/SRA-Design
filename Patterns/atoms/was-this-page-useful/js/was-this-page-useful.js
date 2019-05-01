document.querySelectorAll('.sra-navbar .btn')
  .forEach(
  e => e.addEventListener('click', navBarFunction) 
  )


  


function navBarFunction(e) {
  alert('button was clicked');
  document.querySelector('.sra-navbar').style.display = 'none';
}