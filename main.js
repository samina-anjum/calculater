#!usr/bin/env node
import inquirer from "inquirer";
const answers = {
    numberOne: Number,
    numberTWO: Number,
    operator: String,
} = await inquirer.prompt([{
        type: "number",
        name: "numberOne",
        message: " entered your  first number",
    }, { type: "number",
        name: "numberTwo",
        message: " entered your  second number",
    }, {
        type: "list",
        name: "operator",
        message: "enter your operator",
        choices: ["+", "-", "*", "/"],
    }]);
const { numberOne, numberTwo, operator } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("please enter a valid operator");
        break;
}
console.log(`your result is ${numberOne} ${operator} ${numberTwo} = ${result}`);
