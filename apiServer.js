var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const logger = require('morgan')
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//API
const mongoose = require('mongoose');
mongoose.connect('mongodb://username:password@ds143892.mlab.com:43892/welltodo')
const Todos = require('./models/todos')

//------> POST TODOS <------
app.post('/todos', (req, res) => {
  const todo = req.body;

  Todos.create(todo, (err, todo) => {
    if(err) {
      throw err;
    }

    res.json(todo);
  })
});

//------> GET TODOS <------
app.get('/todos', (req, res) => {
  Todos.find((err, todos) => {
    if(err) {
      throw err;
    }

    res.json(todos);
  })
})

//-----> DELETE TODOS <-----
app.delete('/todos/:_id', (req, res) => {
  const query = {_id: req.params._id};

  Todos.remove(query, (err, todo) => {
    if(err) {
      throw err;
    }

    res.json(todo)
  })
})
//END API

app.listen(3001, (err) => {
  if(err) throw err;

  console.log('API server is up and running')
})
