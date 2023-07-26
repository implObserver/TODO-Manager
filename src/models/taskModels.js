import { openFolder } from "../controllers/foldersControllers";
import { getButtonForAddTask } from "../views/nodes/ButtonForAddTask";
import { getTaskNode } from "../views/nodes/task";
import { Element } from "./element";
import { OpenedFolder } from "./folderModels";

export const OpenedTask = (() => {
    let openedTask;
    const setOpenedTask = (task) => {
        openedTask = task;
    }
    const getOpenedTask = () => {
        return openedTask;
    }
    return { setOpenedTask, getOpenedTask }
})();

export const Task = (id) => {
    const prototype = Element(id);
    const node = getTaskNode(id);
    let inputs = [];

    const setContent = () => {
        const content = document.querySelector('.template-task').cloneNode(true);
        content.className = 'opened-task';
        return content;
    };

    const content = setContent();

    const getNode = () => {
        return node;
    }

    const getContent = () => {
        return content;
    }

    const setInput = (input) => {
        inputs.push(input);
    }

    const removeInput = (input) => {
        inputs = inputs.filter((e) => e !== input);
    }

    const getInputs = () => {
        return inputs;
    }

    const del = (e) => {
        let parent = OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        openFolder(parent);
    }

    return Object.assign({}, prototype, { getInputs, setInput, removeInput, getContent, del, getNode });
}

export const ButtonForAddTask = (() => {
    const node = getButtonForAddTask();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();