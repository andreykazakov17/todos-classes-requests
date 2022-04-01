import { countTodos } from "../services/utils";
import MyEventEmitter from "../services/eventEmitter";

export default class Filters extends MyEventEmitter {
    constructor(completeAllBtn, filterPanel) {
        super();
        this.completeAllBtn = completeAllBtn;
        this.filterPanel = filterPanel;
    }

    render(todosArr) {

        const { completeAllBtn, filterPanel } = this;
        filterPanel.childNodes[1].innerText = `Total: ${countTodos(todosArr)}`;

        if (todosArr.length) {
            completeAllBtn.style.display = '';
            filterPanel.style.visibility = 'visible';
        } else {
            completeAllBtn.style.display = 'none';
            filterPanel.style.visibility = 'hidden';
        }
    }
}