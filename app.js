let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];

};

const gameDraw = () => {
    
    msg.innerText= "Game Was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You Won. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

};

const playGame = (userChoice) => {
    //user choice
    //generate computer choice
    const compChoice = genCompChoice();
    //fight between computer and user

    if (userChoice === compChoice) {
        gameDraw();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            {
                //comp choice will be paper or scissors
                userWin = compChoice === "paper" ? false : true;

            }
        } else if (userChoice === "paper") {
            //paper rock
            userWin = compChoice === "scissors" ? false : true;

        }else  {
            //paper scissor
            userWin=compChoice=== "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});