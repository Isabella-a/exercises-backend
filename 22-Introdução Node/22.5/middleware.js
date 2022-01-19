// Validações EXERCÍCIO 1
// * username deve ter mais de 3 caracteres;
// * email deve ter o formato email@mail.com;
// * password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
// * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;

const validateUserName = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.lenght < 3) return res.status(400).json({ "message": "invalid data" });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || !email.inclues('@') || !email.inclues('.com')) {
    return res.status(400).json({ "message": "invalid data" });
  };
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRejex = /^[0-9]*$/;
  if (password > 8 || password < 4 || !password.match(passwordRejex)) {
    return res.status(400).json({ "message": "invalid data" });
  }
  next();
};

// Validação exercício 2
// * O token deve ser uma string de 12 caracteres contendo letras e/ou números.
// * Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
const validateToken = (req, res, next) => {
  const { token } = req.headers.token.authorization;
  const tokenRegex = /^[a-zA-Z0-9]{12}$/;
  if (!token || !token.match(tokenRegex)) {
    return res.status(401).json({ "message": "invalid token" });
  };
  next();
};


module.exports = {
  validateEmail,
  validatePassword,
  validateUserName,
  validateToken,
};