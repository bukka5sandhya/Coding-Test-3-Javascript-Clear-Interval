let counterEle = document.getElementById("counter");
let clearCounterEle = document.getElementById("clearCounter");
let startCount = 0;

let timeId= setInterval(function(){
    startCount += 1; 
    counterEle.textContent = startCount
}, 1000)

clearCounterEle.onclick = function(){
    clearInterval(timeId);
}