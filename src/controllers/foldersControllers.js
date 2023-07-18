import { Tools } from "../helper/tools";
import { ButtonForAddFolder, ButtonForCloseFolder, OpenedFolder } from "../models/folderModels";
import { addLinkToPath, viewFolder } from "../views/nodes/content";
import { setListeners } from "./listeners";

export const openFolder = (folder) => {
    let content = document.querySelector('.folders');
    Tools.removeChilds(content);
    createButtons();
    viewsCfg(folder);
    OpenedFolder.setOpenedFolder(folder);
}

export const createFolder = (folder = OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder(folder);
    viewFolder(newFolder.getNode());
    setFontSizeToFolders();
    setListeners().forFolder(newFolder);

}

const createButtons = () => {
    createButtonToAddFolder();
    createButtonToCloseFolder();
}

const createButtonToAddFolder = () => {
    viewFolder(ButtonForAddFolder.getNode(), 'add');
}

const setButtonsListeners = (() => {
    setListeners().forButtonToAddFolder(ButtonForAddFolder);
    setListeners().forButtonToCloseFolder(ButtonForCloseFolder);
})();

const createButtonToCloseFolder = () => {
    viewFolder(ButtonForCloseFolder.getNode(), 'close');
}

const viewsCfg = (folder) => {
    viewFolders(folder.getInnerFolders());
    setFontSizeToFolders();
}

const viewFolders = (folders) => {
    for (let folder of folders) {
        const node = folder.getNode();
        viewFolder(node);
    }
}

export const setFontSizeToFolders = () => {
    let template = document.querySelector('.templateFolder');
    Tools.relativeFont(template, '--font-size-to-folder');
}

