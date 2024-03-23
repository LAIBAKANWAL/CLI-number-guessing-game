#! /usr/bin/env node

import inquirer from "inquirer";

const randomNo = Math.floor(Math.random() * 6 + 1);

const number = await inquirer.prompt([
    {
        message: 'Please guess a number between 1 to 6',
        name: 'userGuessedNumberssssssss',
        type: 'number'
    }
]);

if(number.userGuessedNumber === randomNo){
    console.log("Congratulations you guessed correct number :)");
}else{
    console.log("Opps you guessed wrong number :(");
}