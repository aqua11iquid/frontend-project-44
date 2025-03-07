#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

const welcomeMessage = 'Welcome to the Brain Games!';
const namePrompt = 'May I have your name? ';
const greetingMessage = (name) => `Hello, ${name}!`;
const instructionMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsToWin = 3;

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const playGame = () => {
    console.log(welcomeMessage);
    const name = readlineSync.question(namePrompt);
    console.log(greetingMessage(name));
    console.log(instructionMessage);

    for (let i = 0; i < roundsToWin; i++) {
        const questionNumber = randomInt(1, 100);
        const correctAnswer = getCorrectAnswer(questionNumber);
        console.log(`Question: ${questionNumber}`);
        
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return; 
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
};

playGame();
