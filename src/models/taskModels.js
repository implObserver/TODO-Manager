import { openFolder } from "../controllers/foldersControllers";
import { setListeners } from "../controllers/listeners";
import { taskContentHandler } from "../controllers/taskControllers";
import { Tools } from "../helper/tools";
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

export const OpenedInput = (() => {
    let openedInput = Tools.createNode('input', 'plug');

    const setOpenedInput = (input) => {
        disableInput();
        openedInput = input;
        activateInput();
    }
    const getOpenedInput = () => {
        return openedInput;
    }

    const activateInput = () => {
        if (openedInput !== OpenedTask.getOpenedTask().getInputs()[0]) {
            openedInput.placeholder = 'Add comment...';
        }
        openedInput.focus();
    }

    const disableInput = () => {
        if (openedInput !== OpenedTask.getOpenedTask().getInputs()[0]) {
            openedInput.placeholder = '';
        }
    }
    return { setOpenedInput, getOpenedInput }
})();

export const Task = (id) => {
    const prototype = Element(id);
    const node = getTaskNode(id);
    let inputs = [];

    const getNode = () => {
        return node;
    }

    const setInput = (input) => {
        inputs.push(input);
    }

    const spliceInput = (index, input) => {
        inputs.splice(index, 0, input);
    }

    const removeInput = (input) => {
        inputs = inputs.filter((e) => e !== input);
    }

    const getInputs = () => {
        return inputs;
    }

    const setContent = () => {
        const content = document.querySelector('.template-task').cloneNode(true);
        content.className = 'opened-task';
        setTitleInput(content);
        return content;
    };

    const setTitleInput = (content) => {
        const input = content.querySelector('.task-input');
        setInput(input);
        setListeners().forTitleInput(input, content);
    }

    const content = setContent();

    const getContent = () => {
        return content;
    }

    const del = (e) => {
        let parent = OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        openFolder(parent);
    }

    return Object.assign({}, prototype, { spliceInput, getInputs, setInput, removeInput, getContent, del, getNode });
}

export const Inputs = () => {
    let node = document.querySelector('.template-input').cloneNode();
    node.className = 'task-input';

    const getTextInput = () => {
        return node;
    }

    return { getTextInput };
}

export const ButtonForAddTask = (() => {
    const node = getButtonForAddTask();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();