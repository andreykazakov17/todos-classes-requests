import MyEventEmitter from "../services/eventEmitter";

export default class TodoItem extends MyEventEmitter {
    constructor({_id, completed, text}, todoListSelector) {
        super();
        this._id = _id;
        this.completed = completed;
        this.text = text;
        this.todoListSelector = todoListSelector;
    }

    render() {

        const { _id, completed, text, todoListSelector } = this;

        const newTodo = document.createElement('li');
        const textWrapper = document.createElement('div');
        const textDiv = document.createElement('div');
        const textInput = document.createElement('input');

        textInput.setAttribute('type', 'text');
        textInput.setAttribute('value', text);
        textInput.classList.add('todo-text');
        textInput.classList.add('hidden');

        newTodo.setAttribute("data-id", _id);
        newTodo.classList.add('todo-item');

        textDiv.classList.add('todo-text');
        textDiv.innerText = text;

        textWrapper.classList.add('text-wrapper');
        textWrapper.appendChild(textDiv);
        textWrapper.appendChild(textInput);

        newTodo.appendChild(textWrapper);
        todoListSelector.appendChild(newTodo);

        // Check button
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        completedBtn.classList.add('complete-btn');
        completedBtn.setAttribute('data-complete', 'complete');
        if (completed) {
            newTodo.classList.add('checked');
            newTodo.classList.add('completed');
        } else {
            newTodo.classList.remove('checked');
            newTodo.classList.remove('completed');
        }
        newTodo.prepend(completedBtn);

        // Trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        trashBtn.classList.add('trash-btn');
        trashBtn.setAttribute('data-trash', 'trash');
        newTodo.appendChild(trashBtn);
    }
}