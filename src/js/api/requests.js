const callApi = async (url, params) => {
    let response = await fetch(`http://localhost:5001${url}`, params);

    if(response.ok) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}

export default class Requests {

    getTodos = async () => {
        const url = '/todos';
        const params = { method: 'GET' };
        return await callApi(url, params);
    }

    addTodo = async (text) => {
        const url = '/todos';
        const params = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(text)
        };

        return await callApi(url, params);
    }

    deleteTodo = async (id) => {
        const url = `/todos/${id}`;
        const params = { method: 'DELETE' };

        return await callApi(url, params);
    }

    checkTodo = async (id) => {
        const url = `/todos/${id}`;
        const params = { method: 'PATCH' };

        return await callApi(url, params);
    }

    completeAll = async () => {
        const url = '/todos';
        const params = { method: 'PATCH' };

        return await callApi(url, params);
    }

    clearCompleted = async (idsArr) => {
        const url = '/todos/clearAll';
        const params = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: idsArr
        };

        return await callApi(url, params);
    }

    updateTextInput = async (text, id) => {
        const url = `/todos/${id}`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(text, id)
        }

        return await callApi(url, params);
    }
}