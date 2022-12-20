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
        this.ToDoArray.map(item => {
            contentTodO += `
                <li>${item.content} 
                <div> <button> <i class="fa-regular fa-trash-can"></i></button> </div> 
                </li>
            `
        })
        getToDo.innerHTML = contentTodO
    }
    addToDo = () => {

    }

}