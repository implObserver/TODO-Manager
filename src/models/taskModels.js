import { openFolder } from "../controllers/foldersControllers";
import { setListeners } from "../controllers/listeners";
import { getTask, taskSerialNumberDecrement } from "../controllers/localStorageControllers/tasks";
import { taskContentHandler } from "../controllers/taskControllers";
import { Tools } from "../helper/tools";
import { getButtonForAddTask } from "../views/nodes/ButtonForAddTask";
import { getTaskNode } from "../views/nodes/task";
import { Element } from "./element";
import { OpenedFolder } from "./folderModels";

export const serialNumberTask = (() => {
    let loadSerialNumber = localStorage.getItem('serialNumberTask');
    let serialNumber = loadSerialNumber === null ? 0 : loadSerialNumber;
    const increment = () => {
        ++serialNumber;
        localStorage.setItem('serialNumberTask', JSON.stringify(serialNumber));
    }

    const decrement = () => {
        --serialNumber;
        localStorage.setItem('serialNumberTask', JSON.stringify(serialNumber));
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    return { getSerialNumber, decrement, increment };
})();

export const OpenedTask = (() => {
    let loadOpenedTask = JSON.parse(localStorage.getItem('openedTask'));
    let openedTask;
    if (loadOpenedTask !== null) {
        openedTask = getTask(loadOpenedTask);
    }
    const setOpenedTask = (task) => {
        openedTask = task;
        localStorage.setItem('lastOpen', JSON.stringify('task'));
        localStorage.setItem('openedTask', JSON.stringify(task.getId()));
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
    const prototype = Element(`${id}t`);
    const node = getTaskNode(`${id}t`);
    let serialNumber;
    let inputs = [];

    const getNode = () => {
        return node;
    }

    const setSerialNumber = (val) => {
        serialNumber = val;
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    const decrementSerialNumber = () => {
        --serialNumber;
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

    const setInputs = (val) => {
        inputs = val;
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

    const getInputsValues = () => {
        let values = [];

        for (let input of inputs) {
            if (input !== null) {
                values.push(input.value);
            }
        }
        return values;
    }

    const del = (e) => {
        let parent = prototype.getParent();
        parent.removeTask(e);
        parent.getCluster().removeChild(e.getLink().getNode());
        localStorage.removeItem(`${e.getId()}`);
    }

    const getJSON = () => {
        let list = {
            name: prototype.getName(),
            link: prototype.getLink().getName(),
            parent: prototype.getParent().getId(),
            id: `${prototype.getId()}`,
            serialNumber: serialNumber,
            inputs: getInputsValues(),
        }

        return JSON.stringify(list);
    }

    const unpackTask = (data) => {
        prototype.setId(data.id);
        prototype.setName(data.name);
        node.querySelector('input').value = prototype.getName();
        prototype.setLink(data.link);
        prototype.setParent(data.parent);
        serialNumber = data.serialNumber;
        inputs = data.inputs;
    }

    return Object.assign({}, prototype, { setInputs, setSerialNumber, getSerialNumber, decrementSerialNumber, getJSON, unpackTask, spliceInput, getInputs, setInput, removeInput, getContent, del, getNode });
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