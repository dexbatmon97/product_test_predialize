require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

// Accepts requests from any origins
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Schema = mongoose.Schema


mongoose.connect(process.env.DATABASE_CONNECTOR, {useNewUrlParser: true, useUnifiedTopology: true})

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
})

const Ticket = mongoose.model('Ticket', {
 status: {
   type: String,
   enum: ['opened'],
   default: 'opened',
 },
 dateOfCreation: {
   type: Date,
   required: true,
 },
 product: {
  type: Schema.Types.ObjectId,
  ref: "Product"
 }
})


const port = 3000

// Request data
// {name: string, description: string, deadline: Date}
app.post('/products', (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const deadline = req.body.deadline;

  const product = new Product({
    name: name,
    description: description,
    deadline: deadline,
  });
  product.save().then((document) => {
    res.status(201).send(document.toJSON());
  });
 
})

app.get('/products', (req, res) => {
 Product.find({}).then(documents => {
   res.send(documents)
 })
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;

  Product.findById(id).then(document => {
    res.send(document)
  })
 })

 app.post('/products/:id/tickets', (req, res) => {
  const productId = req.params.id;
  const dateOfCreation = req.body.dateOfCreation;
  const ticket = new Ticket({
    product: productId,
    dateOfCreation: dateOfCreation,
  });
  ticket.save().then((document) => {
    res.status(201).send(document.toJSON());
  });

})

app.get('/products/:id/tickets', (req, res) => {
  const productId = req.params.id;
  Ticket.find({product: productId}).then(documents => {
    res.send(documents)
  })
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
