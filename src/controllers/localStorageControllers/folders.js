import { Folder, RootFolder, serialNumberFolder } from "../../models/folderModels";
import { getCustomLink, setListenerForLink } from "../linksControllers";
import { setListeners } from "../listeners";
import { getTask } from "./tasks";

let foldersData = [];
let folders = [];

export const addFolder = (folder) => {
    folders.push(folder);
}

export const sortFoldersData = () => {
    foldersData.sort((a, b) => (a.serialNumber > b.serialNumber) ? 1 : ((b.serialNumber > a.serialNumber) ? -1 : 0));
}

export const addFolderData = (data) => {
    foldersData.push(data);
}

export const getFoldersData = () => {
    return foldersData;
}

export const getFolders = () => {
    return folders;
}

export const loadFoldersElements = () => {
    for (let data of foldersData) {
        let folder = loadFolder(data);
        loadFolderLink(folder, data);
    }
}

export const loadFolder = (data, flag = '') => {
    let folder = Folder(data.id);
    setListeners().forFolder(folder);
    setListeners().forInputToName(folder);
    folder.unpackFolder(data);
    if (flag === 'root') {
        RootFolder.setRootFolder(folder);
    } else {
        folders.push(folder);
    }
    return folder;
}

const loadFolderLink = (folder, data) => {
    let link = getCustomLink(folder);
    setListenerForLink(link);
    link.setName(data.link);
    link.getNode().querySelector('span').textContent = `\\${data.link}`;
    folder.setLink(link);
}

export const setAllInnerFolders = () => {
    for (let folder of folders) {
        setInnerFolders(folder);
    }
}

export const setAllInnerTasks = () => {
    for (let folder of folders) {
        setInnerTasks(folder);
    }
}

const setInnerTasks = (folder) => {
    let tasksIds = folder.getInnerTasks();
    let innerTasks = [];
    for (let id of tasksIds) {
        let child = getTask(id)
        innerTasks.push(child);
    }
    folder.setInnerTasks(innerTasks);
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

export const getFolder = (id) => {
    let res = folders.filter(folder => {
        if (folder.getId() === id) {
            return folder;
        }
    })
    return res[0];
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

export const folderSerialNumberDecrement = (number) => {
    for (let folder of folders) {
        if (folder.getSerialNumber() > number) {
            folder.decrementSerialNumber();
            localStorage.setItem(`${folder.getId()}`, folder.getJSON());
        }
    }
    serialNumberFolder.decrement();
}