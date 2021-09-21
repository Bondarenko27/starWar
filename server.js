//mongodb+srv://Bondarenko27:<password>@cluster0.euqup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Bondarenko27:Programer$21@cluster0.euqup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useUnifiedTopology: true}).then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(bodyParser.urlencoded({ extended: true }))

    app.set('view engine', 'ejs')

    app.use(express.static('public'))

    app.use(bodyParser.json())
   
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
          .then(results => {
            res.sendFile(__dirname + '/index.html'),
            res.render('index.ejs', { quotes: results })
            
          })
          .catch(/* ... */)
      })

      app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
        })

        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdateOne(
                { name: 'Yoda' },
                {
                  $set: {
                    name: req.body.name,
                    quote: req.body.quote
                  }
                },
                {
                  upsert: true
                }
              )
                .then(result => {/* ... */})
                .catch(error => console.error(error)).
            
                fetch({})
                .then(res => {
                  if (res.ok) return res.json()
                })
                .then(response => {
                  window.location.reload(true)
                })
            })
          app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                { name: req.body.name }
              ).then(result => {
                if (result.deletedCount === 0) {
                  return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vadar's quote`)
              })
              .catch(error => console.error(error))
          })
     

    
    app.listen(3000, function() {
        console.log('listening on 3000')
      })
  })
  .catch(error => console.error(error))
   
 

 


  
  
  