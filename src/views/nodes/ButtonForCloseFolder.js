import { Tools } from "../../helper/tools";

const getWrapperIcon = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.arrow-left');
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


export const getButtonForCloseFolder = () => {
    const folder = buttonForCloseFolderAssembly();
    return folder;
}

const buttonForCloseFolderAssembly = () => {
    const folder = Tools.createNode('div', 'back');
    Tools.appendChilds(folder, getWrapperIcon());
    return folder;
}