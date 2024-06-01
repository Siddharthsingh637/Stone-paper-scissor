let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //Selected all choices
const msg = document.querySelector("#msg");

const myScorePara = document.querySelector("#my-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];

}

const showWinner = (myWin) => {
    if(myWin){
        // console.log("you Won");
        myScore++;
        myScorePara.innerText = myScore;
        msg.innerText = `You win ! `;
        msg.style.background = "green";
        
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ! `;
        msg.style.background = "red";    
    }
}

const playGame = (myChoice) => {
    console.log("user choice = ", myChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(myChoice === compChoice){
        console.log("DRAW");
        msg.innerText = ` DRAW ` ;
        msg.style.background = "grey";
    }
    else{
        let myWin = true;
        if(compChoice === "rock"){
            myWin = compChoice === "paper" ? false : true;
        }
        else if(compChoice==="paper"){
            myWin = compChoice === "scissor" ? false : true;
        }
        else{
            myWin = compChoice === "scissor" ? false : true;
        }
        showWinner(myWin);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const myChoice = choice.getAttribute("id");
        //console.log(`choice was clicked`, myChoice)
        playGame(myChoice);
    });


});