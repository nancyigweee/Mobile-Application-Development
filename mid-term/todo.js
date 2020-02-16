import  {qs, qsa, bindTouch} from "./utilities.js";
let todoList = [];
function saveTodo(toDo) {
    console.log("saved", toDo);
}

export default class Todo {
    constructor() {
        bindTouch('#newTodoButton', this.addNewTodo.bind(this));
    }
    listTodos() {
        console.log("listed");
    }
    addNewTodo() {
        //get todo text
        const todoText = qs('#newTodo');
        // save to datastore
        saveTodo(todoText.value);
        //list todos
        this.listTodos();
    }
    removeTodo(id) {

    }
    completeTodo(id) {

    }
}