
function getComputerChoice() {
    const value = Math.random()*100 + 1;

    if(value<=33){
        return 'rock';
    }else if(value<=66){
        return 'paper';
    }
    return 'scissor';
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const rock = document.createElement("button");
    rock.textContent = "Rock";
    const scissor = document.createElement("button");
    scissor.textContent = "Scissor";
    const paper = document.createElement("button");
    paper.textContent = "Paper";

    const div = document.querySelector("div");
    div.append(rock,scissor,paper);

    rock.addEventListener("click",() => {
        playRound("rock",getComputerChoice())
    });

    scissor.addEventListener("click",() => {
        playRound("scissor",getComputerChoice())
    });

    paper.addEventListener("click",() => {
        playRound("paper",getComputerChoice())
    });

    const score = document.createElement("div");
    const current = document.createElement("h2");
    const hscore = document.createElement("h3");
    const cscore = document.createElement("h3");
    score.append(current,hscore,cscore);
    div.appendChild(score);

    hscore.textContent = `Your Score : ${humanScore}`;
    cscore.textContent = `Computer Score : ${computerScore}`;
   

    function playRound(humanChoice,computerChoice){

    if(humanChoice=='rock' && computerChoice=='scissor'){
        humanScore++;
        current.textContent="You Win! Rock beats Scissor";
    }else if(humanChoice=='paper' && computerChoice=='rock'){
        humanScore++;
        current.textContent="You Win! Paper beats Rock";
    }else if(humanChoice=='scissor' && computerChoice=='paper'){
        humanScore++;
        current.textContent="You Win! Scissor beats Paper";
    }else if(humanChoice==computerChoice){
        current.textContent="Draw Play Again!";
    }else{
        computerScore++;
        current.textContent=`You Loose! ${computerChoice} beats ${humanChoice}`;
    }
    hscore.textContent = `Your Score : ${humanScore}`;
    cscore.textContent = `Computer Score : ${computerScore}`;

    const final = document.createElement("h1");
    div.appendChild(final);

    if(humanScore==5){
        final.textContent="You have won!!!";
    }else if(computerScore==5){
        final.textContent="You have lost!!!";
    }

    }

}

playGame();

