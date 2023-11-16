import {showList} from "./showList.js";

export const addTaskForm = document.querySelectorAll('.addtaskform')
export const higTasks = document.querySelector('.hightasks')
export const lowTasks = document.querySelector('.lowtasks')
addTaskForm[0].addEventListener('submit', printSomething)
addTaskForm[1].addEventListener('submit', printSomething)
import {addTask, PRIORITY} from "./addTask.js";


function printSomething (event) {
    event.preventDefault()
    if(event.target === addTaskForm[0]) {
        addTask('addtask', higTasks, PRIORITY.HIGH)
    }
    else
        addTask('addtasklow', lowTasks, PRIORITY.LOW)
}
showList()

