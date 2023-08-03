import { OpenedFolder } from "../models/folderModels";
import { regulars } from "../models/regulars";
import { Inputs, OpenedInput, OpenedTask, Task, serialNumberTask } from "../models/taskModels";
import { viewElement } from "../views/nodes/folders";
import { viewLinkOpenedTask } from "../views/nodes/links";
import { addLinkToPath } from "./linksControllers";
import { setListeners } from "./listeners";
import { addTask } from "./localStorageControllers/tasks";


export const taskContentHandler = () => {
    let task = OpenedTask.getOpenedTask();

    const isNumberList = (str) => {
        let checkNumberlist = new RegExp(regulars.checkNumberlist, 'g');
        let res = str.match(checkNumberlist);

        return res !== null;
    }

    const getNewInput = (value = '') => {
        let newInput = Inputs().getTextInput();
        if (value !== '') {
            newInput.value = value;
        }
        return newInput;
    }

    const viewNewInput = (input, newInput) => {
        input.parentNode.insertBefore(newInput, input.nextSibling);
        activateInput(newInput);
    }

    const activateInput = (input) => {
        OpenedInput.setOpenedInput(input);
    }

    const getData = () => {
        const input = OpenedInput.getOpenedInput();
        let task = OpenedTask.getOpenedTask();
        let content = task.getContent();
        let container = content.querySelector('.task-body');
        const inputs = task.getInputs();
        const index = inputs.indexOf(input);
        return { input, task, content, container, inputs, index };
    }

    const setPreviousInput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index - 1];
        if (data.index - 1 >= 0) {
            activateInput(oldInput);
        }
    }

    const setNextinput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index + 1];
        if (data.index + 1 < data.inputs.length) {
            activateInput(oldInput);
        }
    }

    const removeInput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index - 1];
        data.task.removeInput(data.input);
        data.container.removeChild(data.input);
        setTimeout(() => {
            activateInput(oldInput);
        }, 1);
    }

    return { isNumberList, setNextinput, setPreviousInput, removeInput, getNewInput, viewNewInput, activateInput };
}

export const openTask = (task) => {
    let content = document.querySelector('.content');
    removeOpenedTask();
    viewLinkOpenedTask(task);
    visibleOpenedTask();
    content.appendChild(task.getContent());
    const input = OpenedTask.getOpenedTask().getContent().querySelector('.task-input');
}

export const removeOpenedTask = () => {
    let content = document.querySelector('.content');
    let openedTask = OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        content.removeChild(openedTask.getContent());
    }
}

export const hiddenOpenedTask = () => {
    let openedTask = OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'hidden';
    }
}

export const visibleOpenedTask = () => {
    let openedTask = OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'visible';
    }
}

export const createTask = (folder = OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = Task(taskId);
    folder.addTask(task);
    task.setSerialNumber(serialNumberTask.getSerialNumber());
    serialNumberTask.increment();
    setListeners().forTask(task);
    setListeners().forInputToName(task);
    addLinkToPath(task, 'task');
    viewElement(task.getNode(), 'task').forNewElement();
    addTask(task);
    localStorage.setItem(`${task.getId()}`, task.getJSON());
    localStorage.setItem(`${folder.getId()}`, folder.getJSON());
}