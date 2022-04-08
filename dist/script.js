/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/api/requests.js":
/*!********************************!*\
  !*** ./src/js/api/requests.js ***!
  \********************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
const callApi = async (url, params) => {
  const {
    method,
    headers,
    body
  } = params;
  let response;

  if (!headers && !body) {
    response = await fetch(url, {
      method: method
    });
  } else {
    response = await fetch(url, {
      method: method,
      headers: headers,
      body: body
    });
  }

  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main */ "./src/js/modules/main.js");
/* harmony import */ var _services_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/localStorage */ "./src/js/services/localStorage.js");


document.addEventListener('DOMContentLoaded', () => {
  const MyTodoList = new _modules_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
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

/***/ }),

/***/ "./src/js/modules/filters.js":
/*!***********************************!*\
  !*** ./src/js/modules/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils */ "./src/js/services/utils.js");
/* harmony import */ var _services_eventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventEmitter */ "./src/js/services/eventEmitter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Filters extends _services_eventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(_completeAllBtn, _filterPanel) {
    super();

    _defineProperty(this, "render", async todosArr => {
      const {
        completeAllBtn,
        filterPanel
      } = this;
      filterPanel.childNodes[1].innerText = `Total: ${await Object(_services_utils__WEBPACK_IMPORTED_MODULE_0__["countTodos"])(todosArr)}`;

      if (todosArr.length) {
        completeAllBtn.style.display = '';
        filterPanel.style.visibility = 'visible';
      } else {
        completeAllBtn.style.display = 'none';
        filterPanel.style.visibility = 'hidden';
      }
    });

    this.completeAllBtn = _completeAllBtn;
    this.filterPanel = _filterPanel;
  }

}

/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/js/modules/todoList.js");
/* harmony import */ var _todoListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoListView */ "./src/js/modules/todoListView.js");
/* harmony import */ var _api_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/requests */ "./src/js/api/requests.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utils */ "./src/js/services/utils.js");
/* harmony import */ var _services_eventEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/eventEmitter */ "./src/js/services/eventEmitter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Controller extends _services_eventEmitter__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor() {
    let {
      todoInput: _todoInput = null,
      todoButton = null,
      completeAllBtn = null,
      todoListSelector = null,
      filterPanel = null,
      clearCompletedBtn = null,
      filtersList = null,
      todosArr = [],
      currentFilter = 'all'
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "handleAddTodo", async e => {
      e.preventDefault();
      const {
        todoInput
      } = this;
      if (todoInput.value === '') return; // let newTodo = await callApi('http://localhost:5001/todos', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json;charset=utf-8'
      //     },
      //     body: JSON.stringify(todoInput.value)
      // });

      let newTodo = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])('http://localhost:5001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todoInput.value)
      });
      this.todoList.trigger("addTodo", newTodo);
      todoInput.value = '';
    });

    _defineProperty(this, "handleDeleteTodo", async e => {
      const id = Object(_services_utils__WEBPACK_IMPORTED_MODULE_4__["findTodoId"])(e);

      if (e.target.dataset.trash !== 'trash' && e.target.dataset.clear !== 'clear-all') {
        return;
      }

      let deletedTodoId = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE'
      });
      this.todoList.trigger('deleteTodo', deletedTodoId);
    });

    _defineProperty(this, "handleCheckTodo", async e => {
      const id = Object(_services_utils__WEBPACK_IMPORTED_MODULE_4__["findTodoId"])(e);

      if (!(e.target.dataset.complete === 'complete')) {
        return;
      }

      this.idsArr = [...this.idsArr, id];
      let checkedTodo = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])(`http://localhost:5001/todos/${id}`, {
        method: 'PATCH'
      });
      this.todoList.todosArr = this.todoList.todosArr.map(todo => todo.id === parseInt(checkedTodo.id) ? checkedTodo : todo);
      this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    });

    _defineProperty(this, "handleFiltersTodo", e => {
      this.todoList.currentFilter = Object(_services_utils__WEBPACK_IMPORTED_MODULE_4__["activeFilter"])(e, this.filtersBtns);
      this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    });

    _defineProperty(this, "handleCompleteAll", async e => {
      e.preventDefault();
      this.todoList.todosArr = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])('http://localhost:5001/todos', {
        method: 'PATCH'
      });
      this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
    });

    _defineProperty(this, "handleClear", async () => {
      this.todoList.todosArr = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])('http://localhost:5001/todos/clearAll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: this.idsArr
      });
      this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
      this.clearCompletedBtn.classList.remove('active-btn');
      this.idsArr = [];
    });

    _defineProperty(this, "handleUpdateText", async e => {
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
        this.todoList.todosArr = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])(`http://localhost:5001/todos/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(textInput.value, id)
        });
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
      };

      textInput.onblur = () => {
        this.todoList.trigger('render', this.todoList.todosArr, this.todoList.currentFilter);
      };
    });

    _defineProperty(this, "init", async () => {
      this.todoList.todosArr = await Object(_api_requests__WEBPACK_IMPORTED_MODULE_3__["callApi"])('http://localhost:5001/todos', {
        method: 'GET'
      });
      this.todoList.trigger('render', this.todoList.todosArr, this.currentFilter);
      this.filters.trigger('filtersRender', this.todoList.todosArr);
      this.todoButton.addEventListener("click", this.handleAddTodo);
      this.todoListSelector.addEventListener('click', e => {
        this.handleDeleteTodo(e);
      });
      this.todoListSelector.addEventListener('click', e => {
        this.handleCheckTodo(e);
      });
      this.filterPanel.addEventListener('click', this.handleFiltersTodo);
      this.completeAllBtn.addEventListener('click', this.handleCompleteAll);
      this.clearCompletedBtn.addEventListener('click', () => {
        this.handleClear();
      });
      this.todoListSelector.addEventListener('dblclick', e => {
        this.handleUpdateText(e, localStorage);
      });
    });

    this.todosArr = todosArr;
    this.currentFilter = currentFilter;
    this.todoListSelector = document.querySelector(todoListSelector);
    this.todoListView = new _todoListView__WEBPACK_IMPORTED_MODULE_2__["default"](this.todoListSelector);
    this.todoInput = document.querySelector(_todoInput);
    this.filtersBtns = document.querySelector(filtersList);
    this.filterPanel = document.querySelector(filterPanel);
    this.todoButton = document.querySelector(todoButton);
    this.completeAllBtn = document.querySelector(completeAllBtn);
    this.clearCompletedBtn = document.querySelector(clearCompletedBtn);
    this.idsArr = [];
    this.filters = new _filters__WEBPACK_IMPORTED_MODULE_0__["default"](this.completeAllBtn, this.filterPanel);
    this.filters.on('filtersRender', todosArr => {
      this.filters.render(todosArr);
    });
    this.todoList = new _todoList__WEBPACK_IMPORTED_MODULE_1__["default"](this.todosArr, this.filters, this.currentFilter);
    this.todoList.on("addTodo", newTodo => {
      this.todoList.addTodo(newTodo);
    });
    this.todoList.on("render", (todosArr, currentFilter) => {
      //this.todoList.getData();
      this.filters.trigger('filtersRender', todosArr);
      this.todoListView.render(todosArr, currentFilter);
    });
    this.todoList.on("deleteTodo", id => {
      this.todoList.deleteTodo(id);
    });
    this.todoList.on('checkTodo', async arr => {
      //this.todoList.todosArr = await this.todoList.checkTodo(id);
      //this.todoList.checkTodo(arr);
      this.todoListView.render(arr, this.todoList.currentFilter);
    });
    this.todoList.on('toggleTodos', () => {
      this.todoList.toggleAllTodos();
    });
    this.todoList.on('updateInput', (e, localStorage) => {
      this.todoList.updateInput(e, localStorage);
    });
  }

}

/***/ }),

/***/ "./src/js/modules/todoItem.js":
/*!************************************!*\
  !*** ./src/js/modules/todoItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoItem; });
/* harmony import */ var _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventEmitter */ "./src/js/services/eventEmitter.js");

class TodoItem extends _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(_ref, todoListSelector) {
    let {
      id,
      completed,
      text
    } = _ref;
    super();
    this.id = id;
    this.completed = completed;
    this.text = text;
    this.todoListSelector = todoListSelector;
  }

  render() {
    const {
      id,
      completed,
      text,
      todoListSelector
    } = this;
    const newTodo = document.createElement('li');
    const textWrapper = document.createElement('div');
    const textDiv = document.createElement('div');
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('value', text);
    textInput.classList.add('todo-text');
    textInput.classList.add('hidden');
    newTodo.setAttribute("data-id", id);
    newTodo.classList.add('todo-item');
    textDiv.classList.add('todo-text');
    textDiv.innerText = text;
    textWrapper.classList.add('text-wrapper');
    textWrapper.appendChild(textDiv);
    textWrapper.appendChild(textInput);
    newTodo.appendChild(textWrapper);
    todoListSelector.appendChild(newTodo); // Check button

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

    newTodo.prepend(completedBtn); // Trash button

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    trashBtn.classList.add('trash-btn');
    trashBtn.setAttribute('data-trash', 'trash');
    newTodo.appendChild(trashBtn);
  }

}

/***/ }),

/***/ "./src/js/modules/todoList.js":
/*!************************************!*\
  !*** ./src/js/modules/todoList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventEmitter */ "./src/js/services/eventEmitter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TodoList extends _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(todosArr, filters, currentFilter) {
    super();

    _defineProperty(this, "addTodo", newTodo => {
      this.todosArr = [...this.todosArr, newTodo];
      console.log(this.todosArr);
      this.trigger("render", this.todosArr, this.currentFilter);
    });

    _defineProperty(this, "deleteTodo", async deletedTodoId => {
      this.todosArr = this.todosArr.filter(todo => todo.id !== parseInt(deletedTodoId));
      this.trigger('render', this.todosArr, this.currentFilter);
    });

    this.todosArr = todosArr;
    this.filters = filters;
    this.currentFilter = currentFilter;
  }

}

/***/ }),

/***/ "./src/js/modules/todoListView.js":
/*!****************************************!*\
  !*** ./src/js/modules/todoListView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoListView; });
/* harmony import */ var _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/eventEmitter */ "./src/js/services/eventEmitter.js");
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem */ "./src/js/modules/todoItem.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils */ "./src/js/services/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TodoListView extends _services_eventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(todoListSelector, _currentFilter) {
    super();

    _defineProperty(this, "render", (todosArr, currentFilter) => {
      this.todoListSelector.innerHTML = '';
      Object(_services_utils__WEBPACK_IMPORTED_MODULE_2__["filterTodos"])(todosArr, currentFilter).forEach(item => {
        const todoItem = new _todoItem__WEBPACK_IMPORTED_MODULE_1__["default"](item, this.todoListSelector);
        todoItem.render();
      });
    });

    this.currentFilter = _currentFilter;
    this.todoListSelector = todoListSelector;
  }

}

/***/ }),

/***/ "./src/js/services/eventEmitter.js":
/*!*****************************************!*\
  !*** ./src/js/services/eventEmitter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyEventEmitter; });
// export default class EventEmitter {
//     constructor() {
//         this.events = {};
//     }
//     on = (eventName, func) => {
//         const event = this.events[eventName];
//         if (event) {
//             event.push(func);
//         } else {
//             this.events[eventName] = [func];
//         }
//     }
//     emit = (eventName, ...data) => {
//         const event = this.events[eventName];
//         if (event) {
//             event.forEach((func) => func(...data));
//         }
//     }
// }
class MyEventEmitter {
  constructor() {
    this._events = {};
  }

  on(name, listener) {
    if (!this._events[name]) {
      this._events[name] = [];
    }

    this._events[name].push(listener);
  }

  trigger(name) {
    for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }

    if (!this._events[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }

    const fireCallbacks = callback => {
      callback(...data);
    };

    this._events[name].forEach(fireCallbacks);
  }

}

/***/ }),

/***/ "./src/js/services/localStorage.js":
/*!*****************************************!*\
  !*** ./src/js/services/localStorage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
class LocalStorage {
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

/***/ }),

/***/ "./src/js/services/utils.js":
/*!**********************************!*\
  !*** ./src/js/services/utils.js ***!
  \**********************************/
/*! exports provided: createTodo, countTodos, activeFilter, findTodoId, filterTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countTodos", function() { return countTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeFilter", function() { return activeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTodoId", function() { return findTodoId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTodos", function() { return filterTodos; });
const createTodo = text => ({
  text,
  completed: false,
  id: new Date().getTime()
});

const countTodos = todosArr => {
  return todosArr.length;
};

const activeFilter = (e, filtersList) => {
  if (e.target.tagName !== 'BUTTON') return;

  for (let btn of Object.values(filtersList.children)) {
    btn.classList.remove('active-btn');
  }

  e.target.classList.add('active-btn');
  return e.target.dataset['btn'];
};

const filterTodos = (items, filter) => {
  switch (filter) {
    case "active":
      return items.filter(item => !item.completed);

    case "completed":
      return items.filter(item => item.completed);

    default:
      return items;
  }
};

const findTodoId = e => {
  const target = e.target;
  const todo = target.parentElement;
  return +todo.getAttribute('data-id');
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map