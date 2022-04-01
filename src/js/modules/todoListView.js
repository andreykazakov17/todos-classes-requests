import MyEventEmitter from "../services/eventEmitter";
import TodoItem from "./todoItem";
import { filterTodos } from '../services/utils';

export default class TodoListView extends MyEventEmitter {
    constructor(todoListSelector, currentFilter) {
        super();
        this.currentFilter = currentFilter;
        this.todoListSelector = todoListSelector;
    }

    render = (todosArr, currentFilter) => {
        this.todoListSelector.innerHTML = '';
        filterTodos(todosArr, currentFilter).forEach((item) => {
            const todoItem = new TodoItem(item, this.todoListSelector);
            todoItem.render();
        })
    }
}