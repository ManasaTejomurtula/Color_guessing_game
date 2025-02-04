let score = 0;
let colors = document.querySelectorAll(".btn");
console.log(colors);
 
let option = document.querySelector(".option");
let status1 = document.querySelector(".status");
let para_score = document.querySelector("#score");
let play_again = document.querySelector("#playAgain");

let randColor ="red";

const getRandColor = ()=>{
    const choices = ["Red","Green","White","Orange","Purple","Yellow","Blue","Pink","Grey","Brown"]
    const randIdx = Math.floor(Math.random()*10);
    option.innerText = choices[randIdx];
    return choices[randIdx];
}

const disable = () =>{
    for(let c of colors){
        c.disabled = true;
    }
}

const enable = () =>{
    for(let c of colors){
        c.disabled =false;
    }
}

const resetGame =() =>{
    enable();
    
    play_again.innerText = "Play Again";
    status1.innerText ="";
    randColor = getRandColor();
}

const checkStatus = (guess,randColor) =>{
    if(randColor.toLowerCase() === guess){
        score+=1;
        para_score.innerText = score;
        status1.innerText = "Correct!";
    }
    else{
        status1.innerText = "OOPS! Wrong";
    }
    disable();
}

function select(id){
    // console.log(id);
    checkStatus(id,randColor);

}
play_again.addEventListener("click",resetGame);