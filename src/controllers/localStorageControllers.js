import { Folder, OpenedFolder, RootFolder } from "../models/folderModels";
import { FolderLink } from "../models/linkOfPath";
import { start } from "./commonControllers";
import { openFolder } from "./foldersControllers";
import { getCustomLink, setListenerfForLink } from "./linksControllers";
import { setListeners } from "./listeners";

let folders = [];
let foldersData = [];
let tasksData;
let rootFolder;

export const laodElements = () => {
    parseData();
    loadFoldersElements();
    setAllInnerFolders();
    setRootInnerFolders();
    setRootFolderParent();
    setAllFolderParents();
    start(RootFolder.getRootFolder());
    openFolder(RootFolder.getRootFolder());
    viewLinks();
}

export const parseData = () => {
    for (var i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (data.id === '0') {
            loadRootFolder(data);
            RootFolder.setRootFolder(rootFolder);
        } else {
            if (data.id.indexOf('t') > -1) {
                tasksData.push(data);
            } else {
                foldersData.push(data);
            }
        }
    }

}

const loadRootFolder = (data) => {
    loadFolder(data, 'root');
}

export const loadFoldersElements = () => {
    for (let data of foldersData) {
        let folder = loadFolder(data);
        loadFolderLink(folder, data);
    }
}

const loadFolder = (data, flag = '') => {
    let folder = Folder(data.id);
    setListeners().forFolder(folder);
    setListeners().forInputToName(folder);
    folder.unpackFolder(data);
    if (flag === 'root') {
        rootFolder = folder;
    } else {
        folders.push(folder);
    }
    return folder;
}

const loadFolderLink = (folder, data) => {
    let link = getCustomLink(folder);
    setListenerfForLink(link);
    link.setName(data.link);
    link.getNode().querySelector('span').textContent = `\\${data.link}`;
    folder.setLink(link);
}

export const setAllInnerFolders = () => {
    for (let folder of folders) {
        setInnerFolders(folder);
    }
}

const setInnerFolders = (folder) => {
    let foldersIds = folder.getInnerFolders();
    let innerFolders = [];
    for (let id of foldersIds) {

        let child = getFolder(id);
        innerFolders.push(child);
    }
    folder.setInnerFolders(innerFolders);
}

const setRootInnerFolders = () => {
    let ids = RootFolder.getRootFolder().getInnerFolders();
    let innerFolders = [];
    for (let id of ids) {
        let folder = getFolder(id);
        innerFolders.push(folder);
    }
    RootFolder.getRootFolder().setInnerFolders(innerFolders);
}

const getFolder = (id) => {
    let res = folders.filter(folder => {
        if (folder.getId() === id) {
            return folder;
        }
    })
    return res[0];
}

const setRootFolderParent = () => {
    let folders = RootFolder.getRootFolder().getInnerFolders();
    for (let folder of folders) {
        folder.setParent(RootFolder.getRootFolder());
    }
}

export const setAllFolderParents = () => {
    for (let folder of folders) {
        setFolderParents(folder);
    }
}

const setFolderParents = (folder) => {
    let folders = folder.getInnerFolders();
    for (let iFolder of folders) {
        iFolder.setParent(folder);
    }
}

const viewLinks = () => {
    for (let folder of folders) {
        viewLink(folder);
    }
}

const viewLink = (folder) => {
    let parent = folder.getParent();
    parent.getCluster().appendChild(folder.getLink().getNode());
}