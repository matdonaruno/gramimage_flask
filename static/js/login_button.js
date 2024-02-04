var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

document.querySelectorAll('.bubbly-button').forEach(button => {
  button.addEventListener('click', function() {
    // Remove existing animations
    button.classList.remove('animate');

    button.classList.add('animate');
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
  });
});

// Optional: Implement additional JavaScript logic if needed
