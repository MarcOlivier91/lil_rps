// Let's build from here
import * as readline from 'readline-sync'

function rps() {
    const choices: string[] = [ "rock", "paper", "scissors"]
    var userInput: string = readline.question('Pick a choice ');
    var userChoice = userInput.toLowerCase()
    console.log('You choose : ' + userChoice)

    const cpuChoice = Math.floor(Math.random() * 3)
    console.log("Opponent choose : " + choices[cpuChoice])
    
    if (userChoice === choices[cpuChoice]) {
        console.log("It's a draw !")
    } else {
        console.log("Someone might have won...")
        switch(userChoice) {
            case "rock":
                var result = (choices[cpuChoice] === "scissors") ? "You Win !" : "You Lose !"
                console.log(result)
                break
            case "paper":
                var result = (choices[cpuChoice] === "rock") ? "You Win !" : "You Lose !"
                console.log(result)
                break
            case "scissors":
                var result = (choices[cpuChoice] === "paper") ? "You Win" : "You Lose !"
                console.log(result)
                break
        }
    }
    return 0
}

rps()