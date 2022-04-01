export default class LocalStorage {
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    setLocalStorage(key, data) {
        const serializedArr = JSON.stringify(data);
        localStorage.setItem(key, serializedArr);
    }

    clearLocalStorage() {
        localStorage.removeItem('todosArr');
    }
}