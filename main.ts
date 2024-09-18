// Let's build from here
import * as readline from 'readline-sync'

function rps() {
    const choices: String[] = [ "rock", "paper", "scissors"]
    var userInput: string = readline.question('Pick a choice ');
    var userChoice = userInput.toLowerCase()
    console.log('You choose : ' + userChoice)

    const cpuChoice = Math.floor(Math.random() * choices.length)
    console.log("Opponent choose : " + choices[cpuChoice]) 
    return 0
}

rps()