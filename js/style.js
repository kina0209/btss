
var breadToast = document.querySelector('#dark');
var javohir = document.querySelector('#toest');


breadToast.addEventListener('click', function() {
	javohir.classList.add('show');
})

var closeBtn = document.querySelector('#close-btn');
closeBtn.addEventListener('click', function(){
	javohir.classList.remove('show')
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

