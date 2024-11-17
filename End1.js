
function video() {
  var timeLeft = 0;
  var elem = document.getElementById('timer');
  var timerId = setInterval(countdown, 1000);
  function countdown() {
      if (timeLeft == 0) {
          clearTimeout(timerId);
          noVideo();
          return;
      } 
      else {
          timeLeft--;
      }
  }
}

function noVideo(){
  document.getElementById("myVideo").style.display = "none";
  document.body.style.backgroundImage = "url('End1.png')";
  document.getElementById("restart").style.display = "block";
}
