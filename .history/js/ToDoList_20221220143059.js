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
                <div class='toDoButton' >  <button class='btn-del'> <i class="fa-regular fa-trash-can"></i></button> <button class='btn-check'> <i class="fa-regular fa-circle-check"></i></button> </div> 
                </li>
            `
        })
        getToDo.innerHTML = contentTodO
    }
    addToDo = (ToDoObj) => {

    }

}