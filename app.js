var min=0;
var sec=0;
var msec=0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval;

function timer(){
    msec++
    msecHeading.innerHTML =msec;
    if(msec >=100){
        sec++
        secHeading.innerHTML = sec
        msec=0
    }else if(sec >=60){
        min++
        minHeading.innerHTML = min
        sec=0
    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML= "0"+min;
    secHeading.innerHTML= "0"+sec;
    msecHeading.innerHTML= "0"+msec;
    stop()
}

function myFunction() {
    document.getElementById("b1").disabled = true;
}
function myFuncAble() {
    document.getElementById("b1").disabled = false;
}
function startIt(){
     start();
     myFunction();
 }

function stopIt(){
    stop();
    myFuncAble();
}

function resetIt(){
    reset();
    myFuncAble();
}