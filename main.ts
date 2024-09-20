// Let's build from here
import * as readline from 'readline-sync'

function rps() {
    const choices: string[] = [ "rock", "paper", "scissors"]
    var userInput: string = readline.keyInSelect(choices, 'Pick a choice ');
    console.log('You choose : ' + choices[userInput])

    const cpuChoice = Math.floor(Math.random() * 3)
    console.log("Opponent choose : " + choices[cpuChoice])
    console.log("******")

    if (choices[userInput] === choices[cpuChoice]) {
        console.log("It's a draw !")
    } else {
        switch(choices[userInput]) {
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