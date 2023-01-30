import { MemClient } from "@mem-labs/mem-node";

const memClient = new MemClient({
  apiAccessToken: "fc977c6a-87cb-445b-a135-272fafe796d8"
});

const { urlencoded } = require('body-parser')
const { Console } = require('console')
const express = require('express')
const app = express()

app.use(express.static('./public'))
app.use(urlencoded({extended:true}))

app.get('/', (req, res) => {
    console.log('get method succed')

})
app.post('/', (req,res) => {
    console.log(req.body)
})

app.listen(8080, () => console.log('Server running'))