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
    document.getElementById("buttons").style.display = "block";
    document.body.style.backgroundImage = "url('intro.png')";
    document.getElementById("start").style.display = "block";
}
