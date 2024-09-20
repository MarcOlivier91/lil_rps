// Let's build from here
import * as readline from 'readline-sync'
import chalk from "chalk"
const clog = console.log

function rps() {
    clog(chalk.white.bgBlueBright('Welcome to Lil RPS !'))
    const choices: string[] = [ "Rock", "Paper", "Scissors"]
    var userInput: string = readline.keyInSelect(choices, 'Pick a choice ');
    clog('You choose : ' + choices[userInput])

    const cpuChoice = Math.floor(Math.random() * 3)
    clog("Opponent choose : " + choices[cpuChoice])
    clog("******")

    if (choices[userInput] === choices[cpuChoice]) {
        clog(chalk.bgWhiteBright("It's a draw !"))
    } else {
        switch(choices[userInput]) {
            case "Rock":
                var result = (choices[cpuChoice] === "Scissors") ? chalk.bgGreen("You Win !") : chalk.white.bgRed("You Lose !")
                clog(result)
                break
            case "Paper":
                var result = (choices[cpuChoice] === "Rock") ? chalk.bgGreen("You Win !") : chalk.bgRed("You Lose !")
                clog(result)
                break
            case "Scissors":
                var result = (choices[cpuChoice] === "Paper") ? chalk.white.bgGreen("You Win !") : chalk.bgRed("You Lose !")
                clog(result)
                break
        }
    }
    return 0
}

rps()