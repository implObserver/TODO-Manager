import { OpenedFolder, RootFolder } from "../../models/folderModels";
import { OpenedTask } from "../../models/taskModels";
import { start } from "../commonControllers";
import { openFolder } from "../foldersControllers";
import { openCluster } from "../linksControllers";
import { openTask } from "../taskControllers";
import { addFolderData, getFolder, loadFoldersElements, loadOpenedFolder, setAllFolderParents, setAllInnerFolders, setAllInnerTasks, sortFoldersData } from "./folders";
import { viewLinks } from "./links";
import { loadRootFolder, setRootFolderParent, setRootInnerFolders, setRootInnerTasks, setRootTaskParent } from "./rootFolder";
import { addTaskData, getTask, loadOpenedTask, loadTaskcontent, loadTasksContents, loadTasksElements, setAllTaskParents, sortTasksData } from "./tasks";

export const laodElements = () => {
    parseData();
    loadFolders();
    loadTasks();
    viewLinks();
    loadLastContent();
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
        console.log(data.id)
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

const loadLastContent = () => {
    const lastContent = JSON.parse(localStorage.getItem('lastOpen'));
    loadOpenedFolder();
    if (lastContent === 'task') {
        loadOpenedTask();
    }
}