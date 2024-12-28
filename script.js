compScore = 0
playerScore = 0

noOfRounds = prompt('How many round do you want to play?')

userChoice = int(function userEntry(){ // Asking for user choice
    return (prompt('Press \n "1" for Rock\n "2" for Paper \n "3" for Scissors'))
})

computerChoice = int(function computerEntry(){
    return Math.floor((Math.random()*10)%3)
})

function gamePlay(){
    if (userChoice == computerChoice){
        alert("Its a draw.")
    }
    else if ((userChoice == 2 && computerChoice == 1) || (userChoice == 3 && computerChoice == 2) || (userChoice == 1 && computerChoice == 3)){
        playerScore += 1
        alert ("You Won this round!")
    
    }else{
        compScore += 1
        alert("You lose this round!")
    }

}

function result (playerScore, compScore){
    if (playerScore > compScore){
        alert("Congratulations, You Won the Game!")
    }else if(compScore > playerScore){
        alert("Sorry, you lost the game!")
    }else{
        alert("Its a draw!")
    }
}



for (i = 1; i <= noOfRounds; i++){    // From round 1 to n
    gamePlay()
}


result(playerScore, compScore)