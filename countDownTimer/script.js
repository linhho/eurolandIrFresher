(function(){
    var endTime = new Date('2016-10-07T23:31:00') / 1000;
    var nowTime = new Date().getTime()/1000;
    var time = (endTime - nowTime);
    var duration = Math.round(time);
    function startTimer(duration){//, daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay
        var timer = duration;
        var interval = setInterval(function () {
            secondsOfADay = 24*60*60;
            secondsOfAHour = 60*60;
            
            //
            days = parseInt(timer / secondsOfADay);
            hours = parseInt(timer % secondsOfADay / secondsOfAHour);
            minutes = parseInt(timer % secondsOfADay % secondsOfAHour / 60);
            seconds = parseInt(timer % secondsOfADay % secondsOfAHour % 60);
            
            //display time count down
            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;
            
            //
            if (--timer < 0) {
                alert("Đã tới giờ"); //notify when duration = 0
                clearInterval(interval); //clear interval
            }
        }, 1000);
    }
    startTimer(duration);
}())