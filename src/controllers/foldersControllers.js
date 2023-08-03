import { Tools } from "../helper/tools";
import { OpenedFolder, serialNumberFolder } from "../models/folderModels";
import { OpenedTask } from "../models/taskModels";
import { viewElement } from "../views/nodes/folders";
import { viewLinkOpenedFolder } from "../views/nodes/links";
import { createButtons, viewElements } from "./commonControllers";
import { openClusterWhenAddingFolder, addLinkToPath } from "./linksControllers";
import { setListeners } from "./listeners";
import { addFolder } from "./localStorageControllers/folders";
import { hiddenOpenedTask } from "./taskControllers";

export const openFolder = (folder) => {
    hiddenOpenedTask();
    clearFoldersContainer();
    createButtons();
    console.log('aaa')
    viewLinkOpenedFolder(folder);
    viewElements(folder.getInnerFolders());
    viewElements(folder.getInnerTasks());
    openClusterWhenAddingFolder(OpenedFolder.getOpenedFolder());

}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    Tools.removeChilds(folders);
}

export const createFolder = (folder = OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder();
    newFolder.setSerialNumber(serialNumberFolder.getSerialNumber());
    serialNumberFolder.increment();
    viewElement(newFolder.getNode()).forNewElement();
    setListeners().forFolder(newFolder);
    setListeners().forInputToName(newFolder);
    addLinkToPath(newFolder);
    addFolder(newFolder);
   
    localStorage.setItem(`${newFolder.getId()}`, newFolder.getJSON());
    localStorage.setItem(`${folder.getId()}`, folder.getJSON());

}

export const setResizeObservers = () => {
    const template = document.querySelector('.templateFolder');
    const ro = new ResizeObserver(e => {
        setFontSizeToFolders(template);
    })

    ro.observe(document.querySelector('.templateFolder'));
}

export const setFontSizeToFolders = (template) => {
    Tools.relativeFont(template, '--font-size-to-folder');
}