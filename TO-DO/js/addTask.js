import {showList} from "./showList.js";
import {list} from "./deleteTask.js";
let i = 0

export let STATUS = {
    NEW: 'New',
    INPROGRESS: 'In Progress',
    DONE: 'Done'

}
export let PRIORITY = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
}



export function addTask (value, container, priority) {
    let inputAdd = document.getElementById(value)
    let inputAddTask = inputAdd.value
    inputAdd.value = ''
    let newTask = {}
    newTask.name = inputAddTask
    newTask.id = i++
    newTask.status = STATUS.NEW
    newTask.priority = priority

    console.log(list)
    list.push(newTask)
    showList()
}