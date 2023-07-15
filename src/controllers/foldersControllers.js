import { Tools } from "../helper/tools";
import { ButtonForAddFolder, ButtonForCloseFolder, OpenedFolder } from "../models/folderModels";
import { viewFolder } from "../views/nodes/content";
import { setFolderListeners, setButtonForAddFolderListeners, setButtonForCloseFolderListeners } from "./listeners";

export const openFolder = (folder) => {
    let content = document.querySelector('.content');
    Tools.removeChilds(content);
    createButtonForAddFolder();
    createButtonForCloseFolder();
    viewFolders(folder.getInnerFolders());
    OpenedFolder.setOpenedFolder(folder);
}

export const createFolder = (folder = OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder(folder);
    viewFolder(newFolder.getNode());
    setFolderListeners(newFolder);
}

const createButtonForAddFolder = () => {
    viewFolder(ButtonForAddFolder.getNode(), 'add');
}

const setButtonForAddFolderListenersListeners = (() => {
    setButtonForAddFolderListeners(ButtonForAddFolder);
    setButtonForCloseFolderListeners(ButtonForCloseFolder);
})();

const createButtonForCloseFolder = () => {
    viewFolder(ButtonForCloseFolder.getNode(), 'close');
}

const viewFolders = (folders) => {
    for (let folder of folders) {
        const node = folder.getNode();
        viewFolder(node);
    }
}
