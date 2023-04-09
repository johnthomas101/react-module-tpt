const express = require('express')

var cors = require('cors')
var app = express()

app.use(cors())
const port = 3001

const cardList = [
    {cardColor:"green",headerText:"Card Green",descText:"Card Green Description"},
    {cardColor:"red",headerText:"Card Red",descText:"Card Red Description"},
    {cardColor:"black",headerText:"Card Black",descText:"Card Black Description"},
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getCards', (req, res) => {
    res.send({status: "success", data: [...cardList ]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})