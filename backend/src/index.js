const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Metodos HHTP
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma infomacao no back-end
 * PUT: alterar uma informacao no back-end
 * DELETE: deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros: 
  * Query: parametros nomeados enviados na rota apos o simbolo de "?" (filtros/paginacao)
  * Route Params: Parametros utilzados para identificar recursos
  * Rquest Body: corpo da requisicao, utilizado para criar ou alterar recursos
  * 
  */

/**
 * Driver : select * from users
 * Query builder: table('users').select('*').where()
 */
app.use(routes);


app.listen(3333);