$(window).on('load', function () {
  $('.container').css('display', 'flex'); // показываем блок с контентом
  $('.backdrop').delay(350).fadeOut('slow'); // и скрываем сам блок прелоудера.
});

$(document).ready(setDocSize);
$(document).resize(setDocSize);
$(document).mousemove(getMouseLocation);
$(document).mousemove(adjustParallax);

var docHeight = 0;
var docWidth = 0;
var mouseX = 0;
var mouseY = 0;

function getMouseLocation() {
  mouseX = event.clientX;
  mouseY = event.clientY;

  mouseX = (100 / docWidth) * mouseX;
  mouseY = (100 / docHeight) * mouseY;
}

function setDocSize() {
  docHeight = $(document).height();
  docWidth = $(document).width();
}

function adjustParallax() {
  var negX = false;
  var negY = false;

  mouseY -= 50;
  mouseX -= 50;

  if (mouseX <= 0) {
    mouseX = -mouseX;
    negX = true;
  }
  if (mouseY <= 0) {
    mouseY = -mouseY;
    negY = true;
  }

  var backPos = '';
  var backX = Math.sqrt(mouseX / 0.1);
  var backY = Math.sqrt(mouseY / 0.1);

  if (negX == true) backX = -backX;
  if (negY == true) backY = -backY;

  backPos = backX - 40 + 'px ' + (backY - 40) + 'px';
  var shadow = backX / 2 + 'px ' + backY / 2 + 'px 2px rgba(0, 0, 0, .9)';

  $('body').css('background-position', backPos);
  $('.text').css('text-shadow', shadow);
}

AOS.init();

var vara = new Vara('#vara-container', './fonts/Satisfy/SatisfySL.json', [
  {
    text: 'Eugen Tokariuk',
    color: 'midnightblue',
    delay: 3000,
    duration: 4000,
  },
]);
