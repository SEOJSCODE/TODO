import {PRIORITY} from "./addTask.js";
import {list} from "./deleteTask.js";
import {higTasks} from "./script.js";
import {lowTasks} from "./script.js";
import {deleteTask} from "./deleteTask.js";
import {changeStatus} from "./changeStatus.js";

export function showList() {
    renderHtml()
    for(const task of list) {
        let div = document.createElement('div')
        let label = document.createElement('label')
        let inputRadio = document.createElement('input')
        let span = document.createElement('span')
        let closeButton = document.createElement('span')
        let taskId = task.id
        closeButton.className = 'close-task'
        div.className = 'todo-task'
        div.setAttribute('id', taskId)
        span.className = 'task-text'
        inputRadio.type = 'checkbox'
        label.appendChild(inputRadio)
        label.appendChild(span)
        div.appendChild(label)
        div.appendChild(closeButton)
        if(task.priority === PRIORITY.HIGH) {
            span.textContent = task.name
            higTasks.appendChild(div)
            closeButton.addEventListener('click', deleteTask)
            inputRadio.addEventListener('click', changeStatus)
        }
        else {
            span.textContent = task.name
            lowTasks.appendChild(div)
            closeButton.addEventListener('click', deleteTask)
            inputRadio.addEventListener('click', changeStatus)
        }
    }

}
export function renderHtml () {
    while (higTasks.firstChild) {
        higTasks.removeChild(higTasks.lastChild)
    }
    while (lowTasks.firstChild) {
        lowTasks.removeChild(lowTasks.lastChild)
    }
}