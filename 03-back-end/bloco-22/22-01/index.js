const readline = require('readline-sync');
const imc = require('./imc');
const fs = require('fs');

const askName = () => {
  return readline.question('Qual é o seu nome? ');
}

const askHeight = () => {
  return readline.questionFloat('Qual é a sua altura? ');
}

const askWeight = () => {
  return readline.questionFloat('Qual é a seu peso? ');
}

function main() {
  
  const name = askName();
  const height = askHeight();
  const weight = askWeight();
  
  const result = imc(weight, height);
  // console.log(`O IMC de ${name} é ${result}`);
  fs.appendFileSync('imc.txt', `O IMC de ${name} é ${result}\n`) // o \n no final é pra dar um enter
  
}

main();
