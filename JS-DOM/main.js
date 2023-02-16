var button = document.getElementById('change-background');
var button2 = document.getElementById('change-background2');
var button3 = document.getElementById('change-background3');
var button4 = document.getElementById('change-background4');

button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'tomato'
});

button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'green'
});

button3.addEventListener('mouseenter', function() {
  document.body.style.backgroundColor = 'orange'
});

button4.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'blue'
});
