import { RootFolder } from "../../models/folderModels";
import { getFolder, loadFolder } from "./folders";
import { getTask } from "./tasks";

export const loadRootFolder = (data) => {
    loadFolder(data, 'root');
}

export const setRootInnerFolders = () => {
    let ids = RootFolder.getRootFolder().getInnerFolders();
    let innerFolders = [];
    for (let id of ids) {
        let folder = getFolder(id);
        innerFolders.push(folder);
    }
    RootFolder.getRootFolder().setInnerFolders(innerFolders);
}

export const setRootFolderParent = () => {
    let folders = RootFolder.getRootFolder().getInnerFolders();
    for (let folder of folders) {
        folder.setParent(RootFolder.getRootFolder());
    }
}

export const setRootInnerTasks = () => {
    let ids = RootFolder.getRootFolder().getInnerTasks();
    let innerTasks = [];
    for (let id of ids) {
        let task = getTask(id);
        innerTasks.push(task);
    }
    RootFolder.getRootFolder().setInnerTasks(innerTasks);
}

export const setRootTaskParent = () => {
    let tasks = RootFolder.getRootFolder().getInnerTasks();
    for (let task of tasks) {
        task.setParent(RootFolder.getRootFolder());
    }
}