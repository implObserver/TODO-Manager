import { Tools } from "../helper/tools";
import { ButtonForAddFolder, ButtonForCloseFolder, Folder, OpenedFolder } from "../models/folderModels";
import { ClusterLink } from "../models/linkOfPath";
import { viewFolder } from "../views/nodes/folders";
import { linkCfg } from "../views/nodes/pathsContainers";
import { setListeners } from "./listeners";

const createButtons = () => {
    createButtonToAddFolder();
    createButtonToCloseFolder();
}

const createButtonToAddFolder = () => {
    viewFolder(ButtonForAddFolder.getNode(), 'add');
}

const createButtonToCloseFolder = () => {
    viewFolder(ButtonForCloseFolder.getNode(), 'close');
}

export const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }
    return { getRootFolder };
})();

const startConfig = (() => {
    let rootFolder = RootFolder.getRootFolder();
    rootFolder.setLink(ClusterLink(rootFolder));
    createButtons();
    OpenedFolder.setOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    setListeners().forButtonToAddFolder(ButtonForAddFolder);
    setListeners().forButtonToCloseFolder(ButtonForCloseFolder);
})();

export const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
    viewFolders(folder.getInnerFolders());
    OpenedFolder.setOpenedFolder(folder);
}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    Tools.removeChilds(folders);
}

export const createFolder = (folder = OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder(folder);
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
    let color = Tools.random_rgba();
    console.log(link.getNode())
    link.getNode().appendChild(link.getCluster());
    linkCfg(link, newFolder);
    newFolder.setLink(link);
    container.appendChild(link.getNode())

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