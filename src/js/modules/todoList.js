import MyEventEmitter from "../services/eventEmitter";
import { callApi } from "../api/requests";

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

    clearCompleted = async (todosArr) => {
        this.todosArr = [...todosArr];
        this.trigger('render', this.todosArr, this.currentFilter);
    }

    updateInput = async (e) => {
        const target = e.target;
    
        if (target.tagName !== 'LI' && target.tagName !== 'DIV') return;
    
        const textWrapper = target.parentElement;
        const textDiv = textWrapper.firstChild;
        const textInput = textWrapper.lastChild;
        const valueLength = textInput.value.length;
        const id = +textWrapper.parentElement.dataset['id'];
    
        textDiv.classList.add('hidden');
        textInput.classList.remove('hidden');
        textInput.focus();
        textInput.setSelectionRange(valueLength, valueLength);

        
        
        textInput.onchange = async () => {
    
            if (textInput.value === '') return;

            this.todosArr = await callApi(`http://localhost:5001/todos/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(textInput.value, id)
            });
            this.trigger('render', this.todosArr, this.currentFilter);
        }
    
        textInput.onblur = () => {
            this.trigger('render', this.todosArr, this.currentFilter);
        }
    }
}