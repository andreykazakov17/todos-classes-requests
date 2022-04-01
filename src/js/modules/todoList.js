import MyEventEmitter from "../services/eventEmitter";

export default class TodoList extends MyEventEmitter {
    constructor(todosArr, filters, currentFilter) {
        super();
        this.todosArr = todosArr;
        this.filters = filters;
        this.currentFilter = currentFilter;
    }

    getDataReq = async () => {
        const url = "http://localhost:5001/todos";
        let response = await fetch(url);
        if(response.ok) {
            let json = await response.json();
            //console.log(json);
            return json;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    postData = (text) => {
        const url = `http://localhost:5001/todos`;
        fetch(url, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({text})
        });
    }

    postDataInput = (text, id) => {
        const url = `http://localhost:5001/todos/${id}`;
        fetch(url, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({text, id})
        });
    }

    deleteOneReq = async (id) => {
        const url = `http://localhost:5001/todos/${id}`;
        await fetch(url, { method: 'DELETE' });
    }

    deleteManyReq = async () => {
        const url = 'http://localhost:5001/todos';
        await fetch(url, { method: 'DELETE' });
    }

    patchOneReq = async (id) => {
        const url = `http://localhost:5001/todos/${id}`;
        let response = await fetch(url, { method: 'PATCH' });
        if(response.ok) {
            let json = await response.json();
            return json;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    patchManyReq = async () => {
        const url = 'http://localhost:5001/todos';
        let response = await fetch(url, { method: 'PATCH' });
        if(response.ok) {
            let json = await response.json();
            //console.log(json);
            return json;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    addTodo = async ({ text, id }) => {

        this.postData(text);
        this.todosArr = await this.getDataReq();
        this.trigger("render", this.todosArr, this.currentFilter);
    }

    deleteTodo = async (id) => {

        await this.deleteOneReq(id);
        this.todosArr = await this.getDataReq();
        this.trigger('render', this.todosArr, this.currentFilter);
    }

    checkTodo = async (id) => {

        return this.todosArr = await this.patchOneReq(id);
    }

    toggleAllTodos = async () => {
        this.todosArr = await this.patchManyReq();
    }

    clearCompleted = async () => {
        //this.todosArr = this.todosArr.filter((item) => !item.completed);

        this.todosArr = await this.deleteManyReq();
        this.todosArr = await this.getDataReq();
        this.trigger('render', this.todosArr, this.currentFilter);
    }

    updateInput = async (e, localStorage) => {
        const target = e.target;
    
        if (target.tagName !== 'LI' && target.tagName !== 'DIV') return;
    
        const textWrapper = target.parentElement;
        const textDiv = textWrapper.firstChild;
        const textInput = textWrapper.lastChild;
        const valueLength = textInput.value.length;
        const id = +textWrapper.parentElement.dataset['id'];
        //console.log(id);
    
        textDiv.classList.add('hidden');
        textInput.classList.remove('hidden');
        textInput.focus();
        textInput.setSelectionRange(valueLength, valueLength);

        
        
        textInput.onchange = async () => {
    
            if (textInput.value === '') return;

            //this.todosArr = this.todosArr.map((item) => item.id === id ? { ...item, text: textInput.value } : item);
            this.postDataInput(textInput.value, id);
            this.todosArr = await this.getDataReq();
            
        
            //localStorage.setLocalStorage('todosArr', this.todosArr);
            this.trigger('render', this.todosArr, this.currentFilter);
        }
    
        textInput.onblur = () => {
            this.trigger('render', this.todosArr, this.currentFilter);
        }
    }
}