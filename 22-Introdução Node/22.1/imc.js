const readline = require('readline-sync');
const calImc = () => {
  const altura = readline.questionInt('Qual é a sua altura em cm? ');
  const peso = readline.questionFloat('Qual é o seu peso em kg? ');
  const imc = Number((peso/ Math.pow(altura/100, 2)).toFixed(2));
  console.log(`Seu peso é ${peso} e sua altura é ${altura}`);
  console.log(`IMC: ${imc}`);
  


  // switch (imc) {
  //   case imc < 18.5 :
  //     console.log('Abaixo do peso (magreza)');
  //     break;
  
  //   case (imc >= 18.5 && imc <= 24.9):
  //     console.log('Peso normal');
  //     break;

  //   case ( 25 <= imc <= 29.9):
  //     console.log('Acima do peso (sobrepeso)');
  //     break;

  //   case (imc >= 30 && imc <= 34.9):
  //     console.log('Obesidade grau I');
  //     break;

  //   case (imc >= 35 && imc <= 39.9):
  //     console.log('Obesidade grau II');
  //     break;

  //   default:
  //     console.log('Obesidade grau III e IV');
  //     break;
  // }
  if (imc < 18.5) console.log('Abaixo do peso (magreza)');
  if (imc >= 18.5 && imc <= 24.9) console.log('Peso normal');
  if (imc >= 25 && imc <= 29.9) console.log('Acima do peso (sobrepeso)');
  if (imc >= 30 && imc <= 34.9) console.log('Obesidade grau I');
  if (imc >= 35 && imc <= 39.9) console.log('Obesidade grau II');
  if (imc >= 40) console.log('Obesidade grau III e IV');

};


// calImc();

module.export = calImc;
