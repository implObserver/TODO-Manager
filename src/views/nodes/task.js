import { Tools } from "../../helper/tools";
import { getInputText } from "./folder";

const getWrapperIcon = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.taskSvg').cloneNode(true);
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}

export const getTaskNode = (id) => {
    const task = taskNodeAssembly(id);
    return task;
}

const taskNodeAssembly = (id) => {
    const task = Tools.createNode('div', 'task', id);
    const name = getInputText();
    Tools.appendChilds(task, getWrapperIcon(id), name);
    return task;
}