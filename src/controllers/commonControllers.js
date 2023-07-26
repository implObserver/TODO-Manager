import { ButtonForAddFolder, ButtonForCloseFolder, OpenedFolder, RootFolder } from "../models/folderModels";
import { ClusterLink } from "../models/linkOfPath";
import { ButtonForAddTask } from "../models/taskModels";
import { viewElement } from "../views/nodes/folders";
import { viewLinkOpenedFolder } from "../views/nodes/links";
import { openCluster } from "./linksControllers";
import { setListeners } from "./listeners";

export const createButtonToAddFolder = () => {
    viewElement(ButtonForAddFolder.getNode(), 'add').forOldElement();
}

export const createButtonToCloseFolder = () => {
    viewElement(ButtonForCloseFolder.getNode(), 'close').forOldElement();
}

export const createButtonToAddTask = () => {
    viewElement(ButtonForAddTask.getNode(), 'add').forOldElement();
}


export const createButtons = () => {
    createButtonToCloseFolder();
    createButtonToAddFolder();
    createButtonToAddTask();
}

const setButtonsListeners = () => {
    setListeners().forButtonToAddFolder(ButtonForAddFolder);
    setListeners().forButtonToAddTask(ButtonForAddTask);
    setListeners().forButtonToCloseFolder(ButtonForCloseFolder);
};

export const viewElements = (elements) => {
    for (let element of elements) {
        const node = element.getNode();
        viewElement(node).forOldElement();
    }
}

const startConfig = (() => {
    let rootFolder = RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink(ClusterLink(rootFolder));
    OpenedFolder.setOpenedFolder(rootFolder);
    createButtons();
    setButtonsListeners();
    openCluster(rootFolder.getLink());
    viewLinkOpenedFolder(rootFolder);
})();