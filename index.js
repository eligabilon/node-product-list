const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const hostname = 'localhost'

const app = express()

const cors = require('cors')
app.use(cors())

const products = [
    {
        code: 1,
        name: 'Product 1',
        description: 'This is the product number one',
        type: 'type ABC',
        price: 123
    },
    {
        code: 2,
        name: 'Product 2',
        description: 'This is the product number two',
        type: 'type ABC',
        price: 223
    },
    {
        code: 3,
        name: 'Product 3',
        description: 'This is the product number three',
        type: 'type ABC',
        price: 323
    },
    {
        code: 4,
        name: 'Product 4',
        description: 'This is the product number four',
        type: 'type ABC',
        price: 423
    },
    {
        code: 5,
        name: 'Product 5',
        description: 'This is the product number five',
        type: 'type ABC',
        price: 523
    },
  
]

app.get('/',  (req, res) => {
    res.send("ok")
})


// list all
app.get('/list/products', cors(), (req, res) => {
    res.send(products)
})


// list one particular
app.get('/list/product/:id', (req, res) => {
    res.send(product) //tbd
})

app.listen(port, () => {
    console.log(`server listening on ${hostname}:${port}`)
})

