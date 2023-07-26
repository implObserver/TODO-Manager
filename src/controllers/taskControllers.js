import { OpenedFolder } from "../models/folderModels";
import { ButtonForAddTask, OpenedTask, Task } from "../models/taskModels";
import { viewElement } from "../views/nodes/folders";
import { viewLinkOpenedTask } from "../views/nodes/links";
import { addLinkToPath } from "./linksControllers";
import { setListeners } from "./listeners";

export const handler = () => {

}

export const openTask = (task) => {
    let content = document.querySelector('.content');
    if (OpenedTask.getOpenedTask() !== task) {
        removeOpenedTask();
        viewLinkOpenedTask(task);
        content.appendChild(task.getContent());
        const input = OpenedTask.getOpenedTask().getContent().querySelector('.task-input');
        setListeners().forTitleInput(input);
    }
    OpenedTask.getOpenedTask().getContent().style.visibility = 'visible';
}

const removeOpenedTask = () => {
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

export const createTask = (folder = OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = Task(taskId);
    folder.addTask(task);
    setListeners().forTask(task);
    addLinkToPath(task, 'task');
    viewElement(task.getNode(), 'task').forNewElement();
}