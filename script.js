const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// We will add an event listener to the form, we want to listen for a submit, then we will have a function takes an event object as an argument and then we can take that event object and call prevent default to prevent the form from having its default behavior.

// Next step, we are going to call a function called 'addTodo', and it's going to have the option to take in a todo. And what it will do is initialize a variable called todoText and set that to whatever the input value is.

// Now if a todo is passed in here, then we want to set todoText = todo.text

// Next thing it to construct a list item, but before that, we have to make sure that todoText exists.

// So if todoText exists then let's creat a todoElement (todoEl) and set this to document.createElement 'li' and we're going to create a list item and then we want to check to see: if (todo && todo.completed) then add the class 'completed'.


function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}




// To set an item you give a 'name' and a value such as 'Ana'. When you save something in local storage, it's going to be saved as a string. If you have an array or an object, you can save it, but you have to first wrap it in JSON.stringify(). And then when you pull it out from local storage, sort of get something, then we'll say localStorage.getItem()

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))