import ToDoList from "./ToDoList.js";

let ToDoListMain = new ToDoList();

const getArr = () => {
    ToDoListMain.renderToDo()
    ToDoListMain.addToDo()
}
getArr()