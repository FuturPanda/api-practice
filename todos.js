const { v4: uuidv4 } = require('uuid');

class Todo {
    constructor(body) {
        this.body = body
        this.id = uuidv4()
    }
}
const todoTest = new Todo("Ceci est un test de todo")
const todos = [todoTest]

module.exports = [Todo, todos]
