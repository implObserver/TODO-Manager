import { TaskLink } from "../../models/linkOfPath";
import { Task, serialNumberTask } from "../../models/taskModels";
import { openCluster, setListenerForLink } from "../linksControllers";
import { setListeners } from "../listeners";
import { openTask, taskContentHandler } from "../taskControllers";
import { getFolder } from "./folders";

let tasksData = [];
let tasks = [];

export const getTasks = () => {
    return tasks;
}

export const addTask = (task) => {
    tasks.push(task);
}

export const addTaskData = (data) => {
    tasksData.push(data);
}

export const sortTasksData = () => {
    tasksData.sort((a, b) => (a.serialNumber > b.serialNumber) ? 1 : ((b.serialNumber > a.serialNumber) ? -1 : 0));
}

export const loadTasksElements = () => {
    for (let data of tasksData) {
        let task = loadTask(data);
        loadTaskLink(task, data);
    }
}

const loadTask = (data) => {
    let task = Task(data.id);
    setListeners().forTask(task);
    setListeners().forInputToName(task);
    task.unpackTask(data);
    tasks.push(task);
    return task;
}

const loadTaskLink = (task, data) => {
    let link = TaskLink(task);
    setListenerForLink(link);
    link.setName(data.link);
    link.getNode().querySelector('span').textContent = `${data.link}`;
    task.setLink(link);
}

export const setAllTaskParents = () => {
    for (let task of tasks) {
        let parent;
        if (typeof task.getParent() === 'string') {
            parent = getFolder(task.getParent());
            task.setParent(parent);
        }
    }
}

export const getTask = (id) => {
    let res = tasks.filter(task => {
        if (task.getId() === id) {
            return task;
        }
    })
    return res[0];
}

export const taskSerialNumberDecrement = (number) => {
    for (let task of tasks) {
        if (task.getSerialNumber() > number) {
            task.decrementSerialNumber();
            localStorage.setItem(`${task.getId()}`, task.getJSON());
        }
    }
    serialNumberTask.decrement();
}

export const loadTasksContents = () => {
    for (let task of tasks) {
        loadTaskcontent(task);
    }
}

const loadTaskcontent = (task) => {
    let content = task.getContent();
    let body = content.querySelector('.task-body');
    let title = content.querySelector('.title');
    let inputs = [];
    let valuesInputs = task.getInputs();
    for (let i = 0; i < valuesInputs.length; i++) {
        let value = valuesInputs[i];
        if (value !== null) {
            if (i === 0) {
                title.value = value;
                inputs.push(title);
            } else {
                let input = taskContentHandler().getNewInput(value);
                inputs.push(input);
                body.appendChild(input)
                setListeners().forInput(input);
            }
        }
    }
    task.setInputs(inputs);
    localStorage.setItem(`${task.getId()}`, task.getJSON());
}

export const loadOpenedTask = () => {
    let taskId = JSON.parse(localStorage.getItem('openedTask'));
    if (taskId !== undefined) {
        let task = getTask(taskId);
        openTask(task);
        openCluster(task.getParent().getLink());
    }
}