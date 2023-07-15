import { OpenedFolder } from "../models/folderModels";
import { createFolder, openFolder } from "./foldersControllers";

export const setFolderListeners = (currentFolder) => {
    let node = currentFolder.getNode();
    const clickFolder = node.addEventListener('dblclick', e => {
        openFolder(currentFolder);
    });
}

export const setButtonForAddFolderListeners = (button) => {
    let node = button.getNode();
    const clickButton = node.addEventListener('dblclick', e => {
        createFolder();
        window.scrollTo(0, document.body.scrollHeight);
    });
}

export const setButtonForCloseFolderListeners = (button) => {
    let node = button.getNode();
    const clickButton = node.addEventListener('dblclick', e => {
        let openedFolder = OpenedFolder.getOpenedFolder();
        openFolder(openedFolder.getParent());
    });
}