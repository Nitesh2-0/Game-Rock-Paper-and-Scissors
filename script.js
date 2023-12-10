let userScore = 0; 
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

userScoreBoard.style.backgroundColor = "green"; 
userScoreBoard.style.borderRadius = "1rem";
userScoreBoard.style.padding = "1rem";
userScoreBoard.style.color = "#fff";

compScoreBoard.style.backgroundColor = "red"; 
compScoreBoard.style.borderRadius = "1rem";
compScoreBoard.style.padding = "1rem";
compScoreBoard.style.color = "#fff";

const computerChoise = () =>{
    const choises = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);

    let randomChoice = choises[randomIdx];
    return randomChoice;
};

const gameDraw = (userChoice) =>{
    msg.innerText = `It's a draw! 😐 Both you and the computer chose ${userChoice}. Try again!`;
    msg.style.backgroundColor = "#081b31"; 
};

const winnerIs = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `🎉 Congratulations! You win! 😊 ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green"; 
        userScoreBoard.innerText = userScore;
    }else{
        compScore++;
        msg.innerText = `You lose! 😥😥 The computer's ${compChoice} defeats your ${userChoice}.`;
        msg.style.backgroundColor = "red"; 
        compScoreBoard.innerText = compScore;
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoise = choice.getAttribute("id"); 
        const compChoice = computerChoise();
        let userWin = true;

        if(userChoise === compChoice){
            gameDraw(userChoise);
            return;
        }else if(userChoise == 'rock'){
            if(compChoice === 'scissors'){
                userWin = true;
            }else{
                userWin = false;
            }
        }else if(userChoise === 'paper'){
            if(compChoice === "rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            if(compChoice === 'paper'){
                userWin = true; 
            }else{
                userWin = false;
            }
        }
        winnerIs(userWin,compChoice,userChoise);
    })
});