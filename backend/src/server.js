const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-e0vgb.mongodb.net/semana09?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para ediçao e delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);