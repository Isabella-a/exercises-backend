// EXERCÍCIO 1:
// 1.1 - Crie uma rota POST /user/register que receba uma requisição que envie username, email e password no body da requisição.
// * Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" };

// 1.2 - Crie uma rota POST /user/login que receba uma requisição que envie email/password no body da requisição e devolva um token como resposta.
// * O formato do token retornado deve ser uma string aleatória com 12 caracteres;
// * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }
// * Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" };

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', router);

app.listen(3000);
