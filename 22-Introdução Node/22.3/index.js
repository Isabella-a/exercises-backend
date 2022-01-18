// Começando a aplicação:
// npm init -y
// npm i express body-parser express-rescue

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// 1 - Crie uma rota GET '/ping' que deve retornar o seguinte JSON: { message: 'pong' }
app.get((_req, res) => {
  res.json({"message": "pong"});
});

// 2 - Crie uma rota POST '/hello'
// * Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// * Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({"message": `Hello, ${name}!`});
});

// 3 - Crie uma rota POST '/greetings'
// * Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// * Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// * Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) <= 17) return res.status(401).json({ "message": "Unauthorized" });
  
  res.status(200).json({ "message": `Hello, ${name}!` });

});

// 4 - Crie uma rota PUT '/users/:name/:age' .
// * Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// 5 - Crie uma API de dados das personagens de Simpsons
// * Utilize o modulo fs do Node para ler/escrever arquivos.
// * Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// * Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// * Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .


// 6 - Crie um endpoint GET '/simpsons'
// * O endpoint deve retornar um array com todos os simpsons.


// 7 - Crie um endpoint GET '/simpsons/:id'
// * O endpoint deve retornar o personagem com o id informado na URL da requisição.
// * Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.


// 8 - Crie um endpoint POST '/simpsons' .
// * Este endpoint deve cadastrar novos personagens.
// * O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// * Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// * Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();


app.use((err, _req, res, _next) => {
  res.status(500).send(`Erro: ${err.message}`);
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));