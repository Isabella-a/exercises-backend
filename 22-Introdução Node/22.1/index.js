// Ao ser executado esse script pergunta o usuário (pelo terminal) qual o script que será rodado e em seguida é redirecionado para o escolhido
const readline = require('readline-sync');
const { calImc } = require('./imc');
const { calVelocidade } = require('./velocidade');
const { checkSorteio } = require('./sorteio');

const script = readline.questionInt('Escolha qual script deseja executar, digite o número correspondente:\n 1. IMC\n 2.Velocidade \n 3.Sorteio');

console.log();


if (script === 1) calImc();
if (script === 2) calVelocidade();
if (script === 3) {
  checkSorteio
} else{
  console.log('Número inválido');
};
