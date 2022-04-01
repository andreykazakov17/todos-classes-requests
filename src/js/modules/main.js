import Filters from './filters';
import TodoList from './todoList';
import TodoListView from './todoListView';
//import LocalStorage from '../services/localStorage';
import { activeFilter, findTodoId } from '../services/utils';
import MyEventEmitter from '../services/eventEmitter';

export default class Controller extends MyEventEmitter {
    constructor({ 
        todoInput = null,
        todoButton = null,
        completeAllBtn = null,
        todoListSelector = null,
        filterPanel = null,
        clearCompletedBtn = null,
        filtersList = null,
        todosArr = [],
        currentFilter = 'all' } = {}){
        super();
        this.todosArr = todosArr;
        this.currentFilter = currentFilter;
        this.todoListSelector = document.querySelector(todoListSelector);
        
        this.todoListView = new TodoListView(this.todoListSelector);
        this.todoInput = document.querySelector(todoInput);
        this.filtersBtns = document.querySelector(filtersList);
        this.filterPanel = document.querySelector(filterPanel);
        this.todoButton = document.querySelector(todoButton);
        this.completeAllBtn = document.querySelector(completeAllBtn);
        this.clearCompletedBtn = document.querySelector(clearCompletedBtn);


        this.filters = new Filters(this.completeAllBtn, this.filterPanel);
        this.filters.on('filtersRender', (todosArr) => {
            this.filters.render(todosArr);
        });

        this.todoList = new TodoList(this.todosArr, this.filters, this.currentFilter);
        this.todoList.on("addTodo", ({ text }) => {
            this.todoList.addTodo({ text });
        });
        this.todoList.on("render", (todosArr, currentFilter) => {
            //this.todoList.getData();
            this.filters.trigger('filtersRender', todosArr);
            this.todoListView.render(todosArr, currentFilter);
        });
        this.todoList.on("deleteTodo", (id) => {
            this.todoList.deleteTodo(id);
        });
        this.todoList.on('checkTodo', async (id) => {
            this.todoList.todosArr = await this.todoList.checkTodo(id);
            this.todoListView.render(this.todoList.todosArr, this.todoList.currentFilter);
        });
        this.todoList.on('toggleTodos', () => {
            this.todoList.toggleAllTodos();
        });
        this.todoList.on('clearCompleted', () => {
            this.todoList.clearCompleted();
        });
        this.todoList.on('updateInput', (e, localStorage) => {
            this.todoList.updateInput(e, localStorage);
        });
    }

    handleAddTodo = (e) => {
        e.preventDefault();

        const { todoInput } = this;

        if (todoInput.value === '') return;

        this.todoList.trigger("addTodo", {
            text: todoInput.value,
            //id: new Date().getTime(),
        });
        todoInput.value = '';
    }

    handleDeleteTodo = (e) => {
        const id = findTodoId(e);
        
        if (e.target.dataset.trash !== 'trash' &&  e.target.dataset.clear !== 'clear-all') {
            return;
        }
        this.todoList.trigger('deleteTodo', id);
    }

    handleCheckTodo = async (e) => {
        const id = findTodoId(e);

        if (!(e.target.dataset.complete === 'complete')) {
            return;
        }
        
        this.todoList.trigger('checkTodo', id);
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    }

    handleFiltersTodo = (e) => {
        this.todoList.currentFilter = activeFilter(e, this.filtersBtns);
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    }

    handleCompleteAll = async (e) => {
        e.preventDefault();
        this.todoList.trigger('toggleTodos');
        this.todoList.todosArr = await this.todoList.getDataReq()
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    }

    handleClear = (localStorage) => {
        this.todoList.trigger('clearCompleted');
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
        this.completeAllBtn.classList.remove('active-btn');
        //localStorage.setLocalStorage('todosArr', this.todoList.todosArr);
    }

    handleUpdateText = (e, localStorage) => {
        this.todoList.trigger('updateInput', e, localStorage);
    }

    init = async () => {

        this.todoList.todosArr = await this.todoList.getDataReq();

        //const localStorage = new LocalStorage();
        //this.todoList.todosArr = localStorage.getLocalStorage('todosArr') || [];
        this.todoList.trigger('render', this.todoList.todosArr, this.currentFilter);

        this.filters.trigger('filtersRender', this.todoList.todosArr);

        this.todoButton.addEventListener("click", this.handleAddTodo);
        this.todoButton.addEventListener("click", () => {
            //localStorage.setLocalStorage('todosArr', this.todoList.todosArr);
        })
        this.todoListSelector.addEventListener('click', (e) => {
            this.handleDeleteTodo(e);
            //localStorage.setLocalStorage('todosArr', this.todoList.todosArr);
        });
        this.todoListSelector.addEventListener('click', (e) => {
            this.handleCheckTodo(e);
            //localStorage.setLocalStorage('todosArr', this.todoList.todosArr);
        });
        this.filterPanel.addEventListener('click', this.handleFiltersTodo);
        this.completeAllBtn.addEventListener('click', this.handleCompleteAll);
        this.clearCompletedBtn.addEventListener('click', () => {
            //this.handleClear(localStorage);
            this.handleClear();
        });
        this.todoListSelector.addEventListener('dblclick', (e) => {
            this.handleUpdateText(e, localStorage);
        });
    }
}