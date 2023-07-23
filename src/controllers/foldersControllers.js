import { Tools } from "../helper/tools";
import { ButtonForAddFolder, ButtonForCloseFolder, Folder, OpenedFolder, RootFolder } from "../models/folderModels";
import { ClusterLink } from "../models/linkOfPath";
import { ButtonForAddTask } from "../models/taskModels";
import { viewFolder } from "../views/nodes/folders";
import { openCluster, setListenerfForLink } from "./linksOfPath";
import { setListeners } from "./listeners";

const createButtons = () => {
    createButtonToAddFolder();
    createButtonToCloseFolder();
    createButtonForAddTask();
}

const createButtonForAddTask = () => {
    viewFolder(ButtonForAddTask.getNode(), 'task');
}

const createButtonToAddFolder = () => {
    viewFolder(ButtonForAddFolder.getNode(), 'add');
}

const createButtonToCloseFolder = () => {
    viewFolder(ButtonForCloseFolder.getNode(), 'close');
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
    createButtons();
    OpenedFolder.setOpenedFolder(rootFolder);
    openCluster(rootFolder.getLink());
    viewLinkOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    setListeners().forButtonToAddFolder(ButtonForAddFolder);
    setListeners().forButtonToCloseFolder(ButtonForCloseFolder);
})();

export const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
    viewFolders(folder.getInnerFolders());
    viewLinkOpenedFolder(folder);
    openClusterWhenAddingFolder(OpenedFolder.getOpenedFolder());
}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    Tools.removeChilds(folders);
}

export const createFolder = (folder = OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder();
    viewFolder(newFolder.getNode());
    setListeners().forFolder(newFolder);
    viewPathsTree(newFolder);
}


const viewFolders = (folders) => {
    for (let folder of folders) {
        const node = folder.getNode();
        viewFolder(node);
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

export const viewPathsTree = (newFolder) => {
    let container = OpenedFolder.getOpenedFolder().getCluster();
    container.style.paddingLeft += '1vh';
    const link = ClusterLink(newFolder);
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
    setListenerfForLink(link);

    setListeners().forButtonToDeleteLink(link);
    newFolder.setLink(link);
    container.appendChild(link.getNode())
    openClusterWhenAddingFolder(OpenedFolder.getOpenedFolder());
}

const openClusterWhenAddingFolder = (folder) => {
    let cluster = folder.getCluster();
    let button = folder.getLink().getNode().querySelector('.close-cluster');
    if (folder.getId() !== 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
        openClusterWhenAddingFolder(folder.getParent());
    } else if (folder.getId() === 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
    }
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