import ToDo from "./ToDo.js";

const getEl = id => document.getElementById(id);

export default class TodoList extends ToDo {

    ToDoArray = [
        {
            id: 1,
            content: 'đi học',
            status: '1'
        },
        {
            id: 2,
            content: 'đi chơi',
            status: '1'
        }
    ]

    renderToDo = () => {
        let getToDo = getEl('todo')
        let contentTodO = ''
        this.ToDoArray.map((item, index) => {
            contentTodO += `
                <li>${item.content} 
                    <div class='buttons' > 
                        <button class='remove'> <i class="fa-regular fa-trash-can"></i></button>
                        <button class='complete'> <i class="fa-regular fa-circle-check"></i></button>
                   </div> 
                </li>
            `
        })
        getToDo.innerHTML = contentTodO
    }
    addToDo = (ToDoObj) => {
        const getAddTodO = getEl('addItem')
        getAddTodO.onclick = () => {
            let valueNewTask = getEl('newTask').value
            if (valueNewTask) {
                this.ToDoArray.push(valueNewTask)
                this.renderToDo()
            }
        }

    }

}