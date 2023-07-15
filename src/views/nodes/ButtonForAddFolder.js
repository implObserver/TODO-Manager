import { Tools } from "../../helper/tools";

const getSvgInWrapper = () => {
    let wrapperIcon = Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.templateFolderSvg');
    Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


export const getButtonForAddFolder = () => {
    const folder = buttonForAddNodeAssembly();
    return folder;
}

const buttonForAddNodeAssembly = () => {
    const folder = Tools.createNode('div', 'templateFolder');
    const name = Tools.getNodeWithSpan('div', `Add...`, 'name');
    Tools.appendChilds(folder, getSvgInWrapper(), name);
    return folder;
}