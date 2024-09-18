// Let's build from here
import * as readline from 'readline-sync'

function rps() {
    let choices = [ "rock", "paper", "scissors"]
    console.log(choices)
    var userInput = readline.question('Pick a choice ');
    console.log('You choose : ' + userInput)
    return 0
}

rps()