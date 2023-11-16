import {showList} from "./showList.js";
import {STATUS} from "./addTask.js";
export let list = []
let incorrectIndex = '-1'

export function deleteTask(event) {
    if(event.target.className === 'close-task') {
        let taskId = event.target.parentNode.attributes.id.value
        taskId = Number(taskId)
        console.log(typeof (taskId))
        let indexTask = list.findIndex(number => number.id === taskId)
        list.splice(indexTask, 1)
        console.log(indexTask)
        showList()

    }
}

