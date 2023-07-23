import { Tools } from "../../helper/tools";

const getSvgInWrapper = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.templateTaskSvg');
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


export const getButtonForAddTask = () => {
    const folder = buttonForAddTaskAssembly();
    return folder;
}

const buttonForAddTaskAssembly = () => {
    const task = Tools.createNode('div', 'templateTask');
    const name = Tools.getNodeWithSpan('div', `Add...`, 'name');
    Tools.appendChilds(task, getSvgInWrapper(), name);
    return task;
}