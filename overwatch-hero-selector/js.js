document.addEventListener('click',addClass);
function addClass(e) {
  let clicked = document.querySelector('.clicked');
  if (clicked) {
    clicked.classList.remove('clicked');
  }
  e.target.parentElement.classList.add('clicked');
}