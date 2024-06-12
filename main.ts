#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
// declare a constant answers and  assign them to the result of inquirer prompt function.
const answers: {
  sentence: string;
} = await inquirer.prompt(
  {
    name: "sentence",
    type: "input",
    message: "Enter a sentence to count the word:"
  },
);


const words = answers.sentence.trim().split(' ');
// print the array of words to the console.
console.log(words);
// print the word count of the sentence to the console.
console.log(chalk.greenBright.italic.bold(`Your sentence words count is ${words.length}`));