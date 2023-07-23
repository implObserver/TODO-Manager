import { Tools } from "../../helper/tools";

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
    const name = Tools.getNodeWithSpan('div', `name: ${id}`, 'name');
    Tools.appendChilds(task, getWrapperIcon(id), name);
    return task;
}