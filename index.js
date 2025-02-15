#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.bold("\n Welcome to 'Guideskool Number Guessing Game' \n"));
const randomNo = Math.floor(Math.random() * 6 + 1);
const number = await inquirer.prompt([
    {
        message: 'Please guess a number between 1 to 6',
        name: 'userGuessedNumber',
        type: 'number'
    }
]);
if (number.userGuessedNumber === randomNo) {
    console.log("Congratulations you guessed correct number :)");
}
else {
    console.log("Opps you guessed wrong number :(");
}
