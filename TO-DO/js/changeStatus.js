import {showList} from "./showList.js";
import {STATUS} from "./addTask.js";
import {list} from "./deleteTask.js";


export function changeStatus (event) {
    let div = event.target.parentElement.parentElement
    let taskText = event.target.nextSibling
    let task = event.target.parentNode.textContent
    let indexTask = list.findIndex(number => number.name === task)
    if(event.target.checked) {
        list[indexTask].status = STATUS.DONE
        taskText.classList.add('status_done')
        div.classList.add('checked')
    }
    else
    {
        list[indexTask].status = STATUS.NEW
        taskText.classList.remove('status_done')
        div.classList.remove('checked')

    }
}