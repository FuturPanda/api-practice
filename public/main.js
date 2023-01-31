
let todoList = document.querySelector('.container')
const addBtn = document.querySelector('.add-todo')
const inputToDo = document.querySelector('.input-todo')
const clearBtn = document.querySelector('.clear-todos')

// Clear Todolist 
clearBtn.addEventListener('click', deleteReq)

async function deleteReq() {
    const res = await fetch('http://localhost:8080/api', {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = await res.json()
    console.log(data)
    todoList.replaceChildren()
    todosInit()
}

// Adding a todo
addBtn.addEventListener('click', postReq)


async function postReq() {
    const data = JSON.stringify({body : inputToDo.textContent})
    const res = await fetch("http://localhost:8080/api", {method : "POST", headers: {
        'Content-Type': 'application/json',
      }, body: data})
    const result = await res.json()
    todoList.replaceChildren()
    todosInit()
}

//Recupérer tous les todos et les display

const fetchAll = async function () {
   const res = await fetch("http://localhost:8080/api")
   const data = await res.json()
   console.log(data)
   return [...data]
} 

function todosInit() {
    let todos = fetchAll()
    console.log(todos)
    console.log(todos)
    todos.then(todoObj => {
        for(let i = 0; i<todoObj.length; i++){
            todoList.appendChild(document.createElement('p')).textContent = todoObj[i].body
        }        
    })
}

todosInit()

