import { Tools } from "../../helper/tools";

const getSvg = () => {
    let icon = new Image();
    icon.src = require('../images/folder.svg');
    return icon;
}

const getWrapperIcon = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = getSvg();
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


export const getFolderNode = (id) => {
    const folder = folderNodeAssembly(id);
    return folder;
}

const folderNodeAssembly = (id) => {
    const folder = Tools.createNode('div', 'folder', id);
    const name = Tools.getNodeWithSpan('div', `name: ${id}`, 'name');
    Tools.appendChilds(folder, getWrapperIcon(), name);
    return folder;
}