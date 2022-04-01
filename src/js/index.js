import Controller from './modules/main';
import LocalStorage from './services/localStorage';

document.addEventListener('DOMContentLoaded', () => {
  
    const MyTodoList = new Controller({ 
        todoInput: '.todo-input',
        todoButton: '.todo-button',
        todoListSelector: '.todo-list',
        completeAllBtn: '.complete-all-btn',
        filterPanel: '.todo-filters',
        clearCompletedBtn: '.todo-clear',
        filtersList: '.todo-filters-list'
    });

    MyTodoList.init();
});