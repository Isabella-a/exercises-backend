const fs = require('fs').promises;
// const readline = require('readline-sync');

// Função que retorna todos os os ids com os respectivos nomes do JSON simpsons
async function readFiles(file) {
  try {
    const promise = await fs.readFile(file, 'utf-8');
    const convertJson = JSON.parse(promise);
    const result = convertJson.map((data) => {
      console.log(`${data.id} - ${data.name}`);
    });
  } catch(err) {
    console.log(err);
  }
};

// readFiles('./simpsons.json');

// Função que retorna somente o nome do personagem com o id fornecido
async function simpsonFind(id) {
  try {
    const promise = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(promise);
    const findSimpson = simpsons.find(simpson => id === simpson.id);
    console.log(`${findSimpson.id} - ${findSimpson.name}`);
  } catch {
    console.error('id não encontrado');
  };
};

// simpsonFind('4');

// Função que remove os personagens com id 10 e 6
async function removeSimpson() {
  try {
    const promise = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(promise);
    const remove = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    remove.map((filteredSimpson) => console.log(`${filteredSimpson.id} - ${filteredSimpson.name}`));
  } catch {
    console.error('Erro na função de remover ids 10 e 6');
  };
};

// removeSimpson();

// Função que cria um arquivo com a família Simpson (id de 1 a 4)
async function createSimpsonFamily() {
  try {
    const promise = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(promise);
    const familyArray = simpsons.filter((simpson) => ['1', '2', '3', '4'].includes(simpson.id));
    await fs.writeFile('simpsonFamily.json', JSON.stringify(familyArray));
    console.log('Arquivo criado com sucesso!');
  } catch {
    console.error('Erro na função de filtrar família Simpsons')
  }
};

// createSimpsonFamily();
