const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');


const signup = require('./controllers/signup');
const signin = require('./controllers/signin');

const db = knex({
  client: 'pg',
  connection: {
    // connectionString : process.env.DATABASE_URL,
    // ssl: true,
    host: '127.0.0.1',
    user: 'postgres',
    password: 'p4ssw0rd',
    database: 'robofriends'
  }
});

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

app.use(bodyParser.json());
app.use(cors());

//This reads the index.html and replaces the root div with the content of our rendered application
app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("../build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error reading index.html");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString('<App />')}</div>`
      )
    );
  });
});

//Grabbing the users from the database and posting them in the specified route
app.get('/users', (req, res) => {
  db.select('*').from('users')
    .then(all => {
      res.status(200).json(all);
    })
});

//This also renders the other aesthetic files in the build folder
app.use(express.static(path.resolve(__dirname, '..', 'build')));



app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/signup', (req, res) => { signup.handleSignup(req, res, db, bcrypt) })

var PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})