const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://nathangabriel27:ng27081998@semanaomnistack-shard-00-00-1ocps.mongodb.net:27017,semanaomnistack-shard-00-01-1ocps.mongodb.net:27017,semanaomnistack-shard-00-02-1ocps.mongodb.net:27017/week10?ssl=true&replicaSet=semanaOmnistack-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.use(express.json())
app.use(routes)

app.listen(3333)

/*
Metodos HTTP: 
Get = Buscar informação 
Post = Criar a informaçao
Put = Editar a informação 
Delete = Deletar a informação
*/

/*
Tipos de parametros :
Query Params: request.query(Filtros, ordenação, paginação)
Route Params: request.params (identificar um recurso na alteração ou remoção)
Body: request.body (Dados para criação ou alteração de um registro)

*/


//MongoDB (Não relacioyanal)

