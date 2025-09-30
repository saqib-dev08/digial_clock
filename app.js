var hourformat24 = true;

var format1 = document.getElementById("hours-24");
var format2 = document.getElementById("hours-12");
format1.style.display = "block";
format2.style.display = "none";


function getTime() {

    var time = new Date();
    var hours = time.getHours().toString().padStart(2, "0");
    var minutes = time.getMinutes().toString().padStart(2, "0");
    var seconds = time.getSeconds().toString().padStart(2, "0");
    var am_pm = document.getElementById("am-pm");

    if (hourformat24 === true) {
        if (hours >= 12) {
            am_pm.innerText = "PM"
        }
        else {
            am_pm.innerText = "AM"
        }
    }
    if (hourformat24 === true && hours === 0) {
        hours = 12;
    }

    if (hourformat24 === false) {
        var currentHour = document.getElementById("hour").innerHTML = hours;
        var currentMinute = document.getElementById("minute").innerHTML = minutes;
        var currentSecond = document.getElementById("second").innerHTML = seconds;
        am_pm.style.display = "none";

    } else {
        hours = hours % 12;
        var currentHour = document.getElementById("hour").innerHTML = hours.toString().padStart(2, "0");
        var currentMinute = document.getElementById("minute").innerHTML = minutes.toString().padStart(2, "0");
        var currentSecond = document.getElementById("second").innerHTML = seconds.toString().padStart(2, "0");
        am_pm.style.display = "block";
        if (currentHour === "00") {
            currentHour = 12;
        }
    }

    var dayName = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"]
    var getDay = time.getDay();
    var today = dayName[getDay];
    document.getElementById("day").innerHTML = today;

    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var getMonth = time.getMonth();
    var nowMonth = monthName[getMonth];
    document.getElementById("month").innerHTML = nowMonth;

    var nowDate = time.getDate();
    document.getElementById("date").innerHTML = nowDate;

    var nowYear = time.getFullYear();
    document.getElementById("year").innerHTML = nowYear;



}
setInterval(getTime, 1000);
getTime();

function hoursformat4() {

    if (format1.style.display === "block") {
        format1.style.display = "none";
        format2.style.display = "block";

    } else {
        format2.style.display = "none";
        format1.style.display = "block";
    }

    if (hourformat24 === true) {
        hourformat24 = false;

    } else {
        hourformat24 = true;
    }
    getTime();
}
