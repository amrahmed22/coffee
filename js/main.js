let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function () {
  $('#loading .sk-fading-circle').fadeOut(1000, () => {
      $('#loading').fadeOut(1000, () => {
          $('body').css('overflow-y', 'auto')
      })
  });
});