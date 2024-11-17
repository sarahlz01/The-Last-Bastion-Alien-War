function time() {
    var chi = document.getElementById('chi');
    document.getElementById('kill_box').style.display = "none";
    chi.style.zIndex = 30;
    var timeLeft = 5;
    var timerId = setInterval(countdown, 1000);
    document.getElementById('sword').style.display = "block";
    document.getElementById('battle').style.display = "none";

    document.getElementById('heart1').style.display = "block";
    document.getElementById('heart2').style.display = "block";
    document.getElementById('heart3').style.display = "block";

    var counter = 0;
    document.getElementById('chi').onclick=function() {
        counter++;
    }
    function countdown() {
        var elem = document.getElementById('timeDisplay');
        if (timeLeft == 0) {
            document.getElementById('timeDisplay').style.display = "none";
            die();
            return;
        }
        else if (counter > 27){
            document.getElementById('heart3').style.display = "none";
            document.getElementById('chi').style.display = "none";
            document.getElementById('sword').style.display = "none";
            document.getElementById('timeDisplay').style.display = "none";
            document.getElementById('die_box').style.display = "block";
        }
        else if (counter >= 9 && counter < 18){
            document.getElementById('heart1').style.display = "none";
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (counter >= 18 && counter < 27){
            document.getElementById('heart2').style.display = "none";
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
}

function die() {
    document.getElementById("chi").style.display = "none";
    document.getElementById("death_box").style.display = "block";
    document.getElementById('timer').style.display = "none";
    document.getElementById('sword').style.display = "none";
    document.getElementById('continue').style.display = "none";
}

function doSomething () {
    document.getElementById("chi").style.display = "block";
    // document.getElementById("click").style.display = "block";
}