import { Tools } from "../helper/tools";
import { ButtonForAddFolder, ButtonForCloseFolder, Folder, OpenedFolder, RootFolder } from "../models/folderModels";
import { ClusterLink, TaskLink } from "../models/linkOfPath";
import { ButtonForAddTask, Task } from "../models/taskModels";
import { viewElement } from "../views/nodes/folders";
import { openCluster, openClusterWhenAddingFolder, setListenerfForLink } from "./linksOfPath";
import { setListeners } from "./listeners";

const createButtons = () => {
    createButtonToCloseFolder();
    createButtonToAddFolder();
    createButtonForAddTask();
}

const createButtonForAddTask = () => {
    viewElement(ButtonForAddTask.getNode(), 'add').forOldElement();
}

const createButtonToAddFolder = () => {
    viewElement(ButtonForAddFolder.getNode(), 'add').forOldElement();
}

const createButtonToCloseFolder = () => {
    viewElement(ButtonForCloseFolder.getNode(), 'close').forOldElement();
}

const viewLinkOpenedFolder = (folder) => {
    let openedFolderLink = OpenedFolder.getOpenedFolder().getLink().getNode();
    openedFolderLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    folder.getLink().getNode().querySelector('.link').style.backgroundColor = '#60d0e4';
    OpenedFolder.setOpenedFolder(folder);
}

const startConfig = (() => {
    let rootFolder = RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink(ClusterLink(rootFolder));
    OpenedFolder.setOpenedFolder(rootFolder);
    createButtons();
    openCluster(rootFolder.getLink());
    viewLinkOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    setListeners().forButtonToAddFolder(ButtonForAddFolder);
    setListeners().forButtonToAddTask(ButtonForAddTask);
    setListeners().forButtonToCloseFolder(ButtonForCloseFolder);
})();

export const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
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
    viewElement(newFolder.getNode()).forNewElement();
    setListeners().forFolder(newFolder);
    viewLink(newFolder);
}

export const createTask = (folder = OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = Task(taskId);
    folder.addTask(task);
    viewLink(task, 'task');
    viewElement(task.getNode(), 'task').forNewElement();
}

const viewElements = (elements) => {
    for (let element of elements) {
        const node = element.getNode();
        viewElement(node).forOldElement();
    }
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

export const viewLink = (element, type = 'folder') => {
    let link = type === 'folder' ? getCustomLink(element) : TaskLink(element);
    let container = OpenedFolder.getOpenedFolder().getCluster();
    let innerTasks = OpenedFolder.getOpenedFolder().getInnerTasks();
    container.style.paddingLeft += '1vh';
    setListenerfForLink(link);
    element.setLink(link);
    if (innerTasks.length > 0 && type === 'folder') {
        let lastNode = innerTasks.at(0).getLink().getNode();
        container.insertBefore(link.getNode(), lastNode);
    } else {
        container.appendChild(link.getNode());
    }
    openClusterWhenAddingFolder(OpenedFolder.getOpenedFolder());
}

export const getCustomLink = (folder) => {
    const link = ClusterLink(folder);
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
    return link;
}

const handler = (folders) => {
    for (let folder of folders) {
        let iFolders = folder.getInnerFolders();
        if (iFolders.length > 0) {
            console.log(folder.getId());
            handler(iFolders);
        } else {
            console.log(folder.getId());
        }
    }
}