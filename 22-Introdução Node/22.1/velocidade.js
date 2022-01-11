const readline = require('readline-sync');

const calVelocidade = () => {
  const distancia = readline.questionInt('Digite a distância em metros: ');
  const tempo = readline.questionInt('Digite o tempo em segundos: ');

  const velocidade = distancia / tempo;

  console.log(`A distância é de ${distancia}m e o tempo de ${tempo}s.`);
  console.log(`A velociade é de ${velocidade}m/s`);
};

calVelocidade();

module.export = calVelocidade;
