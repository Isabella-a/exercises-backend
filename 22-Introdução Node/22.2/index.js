// Crie uma função que recebe três parâmetros retorna uma Promise .
function calPromise(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const result = (num1 + num2) * num3;

    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
  return promise;
};

// Testando a função
calPromise(1, 4, 5)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err) => console.error(`Erro: ${err.message}`));

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

// Resolvendo a função
// calPromise(num1, num2, num3)
//   .then((result) => console.log(`Resultado: ${result}`))
//   .catch((err) => console.error(`Erro: ${err.message}`));

// Resolvendo a função com async await
async function resolvePromisse(num1, num2, num3) {
  try {
    const result = await calPromise(num1, num2, num3);
    console.log(`Resultado: ${result}`);
  } catch(err) {
    console.error(err);
  }
};

resolvePromisse(num1, num2, num3);

