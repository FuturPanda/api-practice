const express = require('express')
const app = express()
let [TodoClass, todos] = require('./todos')

app.use(express.static("./public"))
app.use(express.json())

app.get("/api", (req,res) => {
  res.status(200).send(todos)
})

app.post("/api", (req, res) => {
    const data = req.body
    console.log(req.body)
    const newToDo =  todos.push(new TodoClass(data.body))
    res.json(todos)
})
 
app.delete("/api", (req, res) => {
  todos = []
  res.status(200).json(todos)
})

app.all("*", (req, res) => {
  res.status(404).send("Ressource not found ")
})

const PORT = process.env.PORT || "8080"
app.listen(PORT, () => console.log(`Listening on ${PORT}`))


const todotest2 = new TodoClass('Le test 2 aec export arrive')
const todotest3 = new TodoClass('Le test 3 pour promise')
todos.push(todotest2)
todos.push(todotest3)
