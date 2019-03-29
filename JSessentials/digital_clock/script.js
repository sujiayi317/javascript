function digitalClock() {

    let date = new Date();
    let hours = date.getHours() + '';
    let minutes = date.getMinutes() + '';
    let seconds = date.getSeconds() + '';

    let day = date.getDay();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    // console.log(clock);
}

digitalClock();

// param1: function name without (), 
// param2: interval in miliseconds
// => the function will be called every second
setInterval(digitalClock, 1000);