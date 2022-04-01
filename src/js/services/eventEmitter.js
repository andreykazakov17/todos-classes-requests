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


export default class MyEventEmitter {
    constructor() {
      this._events = {};
    }
  
    on(name, listener) {
      if (!this._events[name]) {
        this._events[name] = [];
      }
  
      this._events[name].push(listener);
    }
  
    trigger(name, ...data) {
      if (!this._events[name]) {
        throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
      }
  
      const fireCallbacks = (callback) => {
        callback(...data);
      };
  
      this._events[name].forEach(fireCallbacks);
    }
}