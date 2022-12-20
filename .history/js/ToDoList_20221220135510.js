import ToDo from "./ToDo.js";

const getEl = id => document.getElementById(id);

export default class TodoList extends ToDo {

    ToDoArray = [
        {
            id: 1,
            content: 'đi học',
            status: '1'
        }
    ]

    renderToDo = () => {
        let getToDo = getEl('todo')
        this.ToDoArray.map(item => {
            console.log(item);
        })
    }
    addToDo = () => {

    }

}