let score =0;

let createBoxes = document.querySelector(".bubble-boxes");
let socreUpdate = document.querySelector(".score");

function createBubbleBox(){
for(let i=1;i<=56;i++){
    let randomNumber =Math.floor(Math.random()*10);
    let message=document.createElement("div");
    message.classList.add("boxes");
    message.innerText=randomNumber;
    createBoxes.appendChild(message);
}
console.log("box created")
}
createBubbleBox()

function timer(){
    let timeCount =60;
    let timeMinus =document.querySelector(".timer");

    let interval = setInterval(() => {
        timeMinus.innerHTML = timeCount;
        timeCount--;
        if (timeCount <= 0) {
            clearInterval(interval)
            timeMinus.innerHTML=timeCount = 60; 
            createBoxes.innerText="Game over!";
        }
    }, 1000);

}
timer();

function hintsValueIncrement(){
let hit = document.querySelector(".hints");

let hintsRandomValue =Math.floor(Math.random()*10);
hit.innerHTML=hintsRandomValue;
}
hintsValueIncrement();



function scoreIncrement(num){
    score += num;
    socreUpdate.innerText = score;
}
function scoreDecrement(num){
    score -= num;
    socreUpdate.innerHTML= score;
}


//Event delegation are use in this Topic
createBoxes.addEventListener("click",(btn)=>{
    
    let boxValue = btn.target.innerText;
        let hintsValue = document.querySelector(".hints").innerText;
        console.log("Hints value is :- ",hintsValue);
        console.log("Button value is :- ",boxValue); 

        if(boxValue == hintsValue){
            hintsValueIncrement();  
            scoreIncrement(10);
            document.querySelector(".bubble-boxes").innerHTML = ""; // Clear existing bubbles
            createBubbleBox();
            console.log("win");  
            
        } else {
            hintsValueIncrement();  
            scoreDecrement(10);
            document.querySelector(".bubble-boxes").innerHTML="";
            createBubbleBox();
            console.log("try again");
            document.getElementById("body").style.backgroundColor="red";
            setTimeout(() => {
                document.getElementById("body").style.backgroundColor="";
            }, 200);
            
            
        }
})

