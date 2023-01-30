const sendBtn = document.querySelector('.send-btn')
const showBtn = document.querySelector('.show-btn')
const inputTitle = document.querySelector('.editor-title')
const inputBody = document.querySelector('.editor-body')

sendBtn.addEventListener('click', makeReq)

async function makeReq() {
     const res = await fetch('http://localhost:8080/', {method : "POST"})
     data = JSON.stringify(inputBody.textContent)
     res.send(data)
}