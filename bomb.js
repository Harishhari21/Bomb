let timerEl =  document.getElementById("timer");
let defuserEl = document.getElementById("defuser");


let countdown = 10;
let intervalId = setInterval(function(){
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if(countdown === 0){
        timerEl.textContent = "Boom!!";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(Event){
    let bombDefuserText = defuserEl.value;
    if(Event.key === "Enter" && bombDefuserText === "haan" && countdown !== 0){
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});