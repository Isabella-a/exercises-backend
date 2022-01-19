const readline = require('readline-sync');

const checkSorteio = () => {
  const number = readline.questionInt('Escolha um número de 0 a 10: ');

  const loteryNumber = Math.round(Math.random() * 10 + 1);

  if (number === loteryNumber) console.log('Parabéns, número correto!');
  if (number!== loteryNumber) console.log(`Opa, não foi dessa vez. O número era ${loteryNumber}`);
};

checkSorteio();

const playAgain = () => {
  const again = readline.question('Deseja jogar novamente? (sim/não)');
  if (again === 'sim') {
    checkSorteio();
  } else {
    console.log('Obrigada por participar!');
  };
};

playAgain();

module.export = { checkSorteio, playAgain };
