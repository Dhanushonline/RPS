
function getComputerChoice() {
    const value = Math.random()*100 + 1;

    if(value<=33){
        return 'rock';
    }else if(value<=66){
        return 'paper';
    }
    return 'scissor';
}

function getHumanChoice() {
    const value = prompt("Enter your choice:");

    return  value.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(){
         const humanChoice = getHumanChoice();
         const computerChoice = getComputerChoice();

    if(humanChoice=='rock' && computerChoice=='scissor'){
        humanScore++;
        console.log("You Win! Rock beats Scissor");
    }else if(humanChoice=='paper' && computerChoice=='rock'){
        humanScore++;
        console.log("You Win! Paper beats Rock");
    }else if(humanChoice=='scissor' && computerChoice=='paper'){
        humanScore++;
        console.log("You Win! Scissor beats Paper");
    }else if(humanChoice==computerChoice){
        console.log("Draw Play Again!");
    }else{
        computerScore++;
        console.log(`You Loose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score: ${humanScore} : ${computerScore}`);
    }

    for(let i=0;i<5;i++){
        playRound();
    }

    console.log(" ");

    if(humanScore>computerScore){
        console.log("You have won!!!");
    }else if(humanScore<computerScore){
        console.log("You have lost!!!");
    }else{
        console.log("Draw!!!");
    }

}

playGame();

