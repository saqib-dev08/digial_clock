
        var hourformat24 = true;

 var format1 = document.getElementById("hours-24");
    var format2 = document.getElementById("hours-12");
    
function hoursFormat() {
   

    if (format1.style.display === "block") {
        format1.style.display = "none";
        format2.style.display = "block";

    }
      else{
        format2.style.display = "none"
        format1.style.display = "block";

    }
}
function hrsformat1(){
    if(format1.style.display === "block"){
     hourformat24 = true;
    }
}
function hrsformat2(){
     if( format2.style.display === "block"){
     hourformat24 = false;
    }

}

/*var setHour24 = document.getElementById("hours-24");
var setHour12 = document.getElementById("hours-12");
    var hourformat24 = true;*/




function getTime() {

    var time = new Date();
    time.setHours(13);
    var hours = time.getHours().toString().padStart(2, "0");
    var minutes = time.getMinutes().toString().padStart(2, "0");
    var seconds = time.getSeconds().toString().padStart(2, "0");
if(!hourformat24){
    var currentHour = document.getElementById("hour").innerHTML = hours;
    var currentMinute = document.getElementById("minute").innerHTML = minutes;
    var currentSecond = document.getElementById("second").innerHTML = seconds; 
}else{
    hours = hours%12;
   var currentHour = document.getElementById("hour").innerHTML = hours.toString().padStart(2, "0");
    var currentMinute = document.getElementById("minute").innerHTML = minutes;
    var currentSecond = document.getElementById("second").innerHTML = seconds; 
}
console.log(currentHour);

}

getTime();
setInterval(getTime(), 1000);


