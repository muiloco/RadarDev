const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://fernando:<4oRdnneMb9o0wInK>@cluster0-bnagq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);


//Metodos HTTP: get, post, put, delete
//tipos de parametros 
//query params: req.query(Filtros, ordenacao, pagiancao...)
//route params: request.params(identificar um recurso na alterção ou remoção)
//body: request.body(Dados para criacao ou altercao de um registro)

//MongoDB (Não-relacional)



app.listen(3333);
