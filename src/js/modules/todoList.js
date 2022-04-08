import MyEventEmitter from "../services/eventEmitter";

export default class TodoList extends MyEventEmitter {
    constructor(todosArr, filters, currentFilter) {
        super();
        this.todosArr = todosArr;
        this.filters = filters;
        this.currentFilter = currentFilter;
    }

    addTodo = (newTodo) => {
        this.todosArr = [...this.todosArr, newTodo];
        this.trigger("render", this.todosArr, this.currentFilter);
    }

    deleteTodo = async (deletedTodoId) => {

        this.todosArr = this.todosArr.filter((todo) => todo.id !== parseInt(deletedTodoId));
        this.trigger('render', this.todosArr, this.currentFilter);
    }
}