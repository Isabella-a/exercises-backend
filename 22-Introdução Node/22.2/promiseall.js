const fs = require('fs').promises;

// Função que cria arquivos com cada elemento com array abaixo
async function createFiles() {
  try {
    const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const createArrayFiles = array.forEach((file, i) => fs.writeFile(`./file${i + 1}.txt`, file));
    await Promise.all(createArrayFiles); // para aguardar a escrita de todos os arquivos
  } catch {
    console.error('Não foi possível criar os arquivos');
  }
}

// createFiles();

// Função que lê arquivos criados e depois cria um arquivo com o conteúdo dos arquivos concatenados
async function readFiles() {
  try {
    const files = await Promise.all([
      fs.readFile('./file1.txt', 'utf-8'),
      fs.readFile('./file2.txt', 'utf-8'),
      fs.readFile('./file3.txt', 'utf-8'),
      fs.readFile('./file4.txt', 'utf-8'),
      fs.readFile('./file5.txt', 'utf-8'),
    ]);
    const fileContent = files.join(' ');
    console.log(fileContent);
    await fs.writeFile('./fileAll.txt', fileContent);
  } catch {
    console.error('Erro ao ler os arquivos!')
  }
};

readFiles();
