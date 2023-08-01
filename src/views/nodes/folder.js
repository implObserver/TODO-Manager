import { Tools } from "../../helper/tools";

const getWrapperIcon = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.folderSvg').cloneNode(true);
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}

export const getFolderNode = (id) => {
    const folder = folderNodeAssembly(id);
    return folder;
}

const folderNodeAssembly = (id) => {
    const folder = Tools.createNode('div', 'folder', id);
    const name = getInputText();
    Tools.appendChilds(folder, getWrapperIcon(id), name);
    return folder;
}

export const getInputText = () => {
    const input = Tools.createNode('input', 'name');
    input.setAttribute("type", "text");
    input.placeholder = 'name?';
    return input;
}