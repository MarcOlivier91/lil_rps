// Let's build from here
import * as readline from 'readline-sync'

function rps() {
    let choices: String[] = [ "rock", "paper", "scissors"]
    console.log(choices)
    var userInput: string = readline.question('Pick a choice ');
    var userChoice = userInput.toLowerCase()
    console.log('You choose : ' + userChoice)
    return 0
}

rps()