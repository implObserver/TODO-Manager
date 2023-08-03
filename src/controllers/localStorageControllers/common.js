import { OpenedFolder, RootFolder } from "../../models/folderModels";
import { OpenedTask } from "../../models/taskModels";
import { start } from "../commonControllers";
import { openFolder } from "../foldersControllers";
import { openCluster } from "../linksControllers";
import { openTask } from "../taskControllers";
import { addFolderData, getFolder, loadFoldersElements, setAllFolderParents, setAllInnerFolders, setAllInnerTasks, sortFoldersData } from "./folders";
import { viewLinks } from "./links";
import { loadRootFolder, setRootFolderParent, setRootInnerFolders, setRootInnerTasks, setRootTaskParent } from "./rootFolder";
import { addTaskData, getTask, loadTaskcontent, loadTasksContents, loadTasksElements, setAllTaskParents, sortTasksData } from "./tasks";

export const laodElements = () => {
    parseData();
    loadFolders();
    loadTasks();
    viewLinks();
    loadLastContent();
}

const loadLastContent = () => {
    const lastContent = JSON.parse(localStorage.getItem('lastOpen'));
    console.log(lastContent)
    if (lastContent === 'folder') {
        loadOpenedFolder();
    }
    if (lastContent === 'task') {
        loadOpenedFolder();
        loadOpenedTask();
    }
}

const loadOpenedFolder = () => {
    let folderId = JSON.parse(localStorage.getItem('openedFolder'));
    if (folderId === 0 || folderId === '0') {
        start(RootFolder.getRootFolder());
        openFolder(RootFolder.getRootFolder())
    } else {
        let folder = getFolder(folderId);
        start(RootFolder.getRootFolder());
        openFolder(folder)
        openCluster(folder.getLink());
    }
}

const loadOpenedTask = () => {
    let taskId = JSON.parse(localStorage.getItem('openedTask'));
    if (taskId !== undefined) {
        let task = getTask(taskId);
        openTask(task);
        openCluster(task.getParent().getLink());
    }
}

const loadFolders = () => {
    sortFoldersData();
    loadFoldersElements();
    setAllInnerFolders();
    setRootInnerFolders();
    setRootFolderParent();
    setAllFolderParents();
}

const loadTasks = () => {
    sortTasksData();
    loadTasksElements();
    setRootInnerTasks();
    setRootTaskParent();
    setAllTaskParents();
    setAllInnerTasks();
    loadTasksContents();
}

const parseData = () => {
    for (var i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (data.id === '0') {
            loadRootFolder(data);
        } else {
            try {
                if (data.id.indexOf('t') > -1) {
                    addTaskData(data);
                } else {
                    addFolderData(data);
                }
            } catch {

            }
        }
    }
}