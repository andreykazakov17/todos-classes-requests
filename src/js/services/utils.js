const createTodo = (text) => ({
    text,
    completed: false,
    id: new Date().getTime()
});

const countTodos = (todosArr) => {
    return todosArr.length;
}

const activeFilter = (e, filtersList) => {
    if (e.target.tagName !== 'BUTTON') return;

    for(let btn of Object.values(filtersList.children)) {
        btn.classList.remove('active-btn');
    }
    e.target.classList.add('active-btn');
    return e.target.dataset['btn'];
}

const filterTodos = (items, filter) => {
    switch (filter) {
        case "active":
            return items.filter((item) => !item.completed);
        case "completed":
            return items.filter((item) => item.completed);
        default:
            return items;
    }
}

const findTodoId = (e) => {
    const target = e.target;
    const todo = target.parentElement;
    const id = todo.getAttribute('data-id');
    return id;
}

export { createTodo, countTodos, activeFilter, findTodoId, filterTodos };