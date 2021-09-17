//mongodb+srv://Bondarenko27:<password>@cluster0.euqup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Bondarenko27:Programer$21@cluster0.euqup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(results => {
          console.log(results)})
        res.sendFile(__dirname + '/index.html')})
    app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
              .then(result => {
                res.redirect('/')
              })
            })
    app.listen(3000, function() {
        console.log('listening on 3000')
      })
  })
  .catch(error => console.error(error))
  


  
  
  