let switcher = document.querySelector('#power');
let body = document.querySelector('body');

switcher.addEventListener('click', function (e) {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
});
