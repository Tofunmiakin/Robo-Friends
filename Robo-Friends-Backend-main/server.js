const express = require ('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');

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

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  db.select('*').from('users')
    .then(all => {
      res.status(200).json(all)
    })
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.post('/signup', (req, res) => {signup.handleSignup(req, res, db, bcrypt)})

var PORT = process.env.PORT || 3001;
app.listen(PORT , () => {
  console.log(`app is running on port ${PORT}`);
})