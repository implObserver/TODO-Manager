import { getFolderNode } from "../views/nodes/folder";
import { getButtonForAddFolder } from "../views/nodes/ButtonForAddFolder";
import { getButtonForCloseFolder } from "../views/nodes/ButtonForCloseFolder";
import { createCluster } from "../views/nodes/links";
import { openFolder } from "../controllers/foldersControllers";
import { Element } from "./element";
import { folderSerialNumberDecrement, getFolder } from "../controllers/localStorageControllers/folders";

export const serialNumberFolder = (() => {
    let loadSerialNumber = localStorage.getItem('serialNumber');
    let serialNumber = loadSerialNumber === null ? 0 : loadSerialNumber;
    const increment = () => {
        ++serialNumber;
        localStorage.setItem('serialNumber', JSON.stringify(serialNumber));
    }

    const decrement = () => {
        --serialNumber;
        localStorage.setItem('serialNumber', JSON.stringify(serialNumber));
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    return { getSerialNumber, decrement, increment };
})();

export const OpenedFolder = (() => {
    let loadOpenedFolder = JSON.parse(localStorage.getItem('openedFolder'));
    let openedFolder;
    if (loadOpenedFolder !== null) {
        openedFolder = getFolder(loadOpenedFolder);
    }
    const setOpenedFolder = (folder) => {
        openedFolder = folder;
        localStorage.setItem('lastOpen', JSON.stringify('folder'));
        localStorage.setItem('openedFolder', JSON.stringify(folder.getId()));
    }
    const getOpenedFolder = () => {
        return openedFolder;
    }
    return { setOpenedFolder, getOpenedFolder }
})();

export const Folder = (id) => {
    const prototype = Element(id);
    let cluster = createCluster();
    const node = getFolderNode(id);
    let innerFolders = []
    let innerTasks = [];
    let folderCount = 0;
    let taskCount = 0;
    let serialNumber;

    const addFolder = () => {
        let newFolder = Folder(folderCount);
        setFolderCount();
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = (e) => {
        for (let folder of innerFolders) {
            folder.del();
        }
        for (let task of innerTasks) {
            task.del(task);
        }
        let filter = prototype.getParent().getInnerFolders().filter((folder) => folder !== prototype.getLink().getFolder());
        prototype.getParent().getCluster().removeChild(prototype.getLink().getNode());
        prototype.getParent().setInnerFolders(filter);
        setInnerFolders([]);
        localStorage.removeItem(`${prototype.getId()}`);
    }

    const setInnerFolders = (arr) => {
        innerFolders = arr;
    }

    const getInnerFolders = () => {
        return innerFolders;
    }

    const getCluster = () => {
        return cluster;
    }

    const getNode = () => {
        return node;
    }

    const addTask = (task) => {
        ++taskCount;
        innerTasks.push(task);
    }

    const removeTask = (task) => {
        innerTasks = innerTasks.filter((e) => e !== task);
    }

    const getInnerTasks = () => {
        return innerTasks;
    }

    const setInnerTasks = (tasks) => {
        innerTasks = tasks;
    }

    const reduceFolderCount = () => {
        --folderCount;
    }

    const setFolderCount = () => {
        ++folderCount;
    }

    const setTaskCount = () => {
        ++taskCount;
    }

    const getTaskCount = () => {
        return taskCount;
    }

    const getIdElements = (elements) => {
        let allIds = [];
        for (let element of elements) {
            allIds.push(element.getId());
        }
        return allIds;
    }

    const setSerialNumber = (number) => {
        serialNumber = number;
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    const decrementSerialNumber = () => {
        --serialNumber;
    }

    const getJSON = () => {
        let list = {
            name: prototype.getName(),
            link: prototype.getLink().getName(),
            parent: prototype.getParent().getId(),
            id: `${prototype.getId()}`,
            innerFolders: getIdElements(innerFolders),
            innerTasks: getIdElements(innerTasks),
            folderCount: folderCount,
            taskCount: taskCount,
            serialNumber: serialNumber,
        }

        return JSON.stringify(list);
    }

    const unpackFolder = (data) => {
        prototype.setId(data.id);
        prototype.setName(data.name);
        node.querySelector('input').value = prototype.getName();
        prototype.setLink(data.link);
        prototype.setParent(data.parent);
        innerFolders = data.innerFolders;
        innerTasks = data.innerTasks;
        folderCount = data.folderCount;
        taskCount = data.taskCount;
        serialNumber = data.serialNumber;
    }

    return Object.assign({}, prototype, { setInnerTasks, getSerialNumber, setSerialNumber, decrementSerialNumber, reduceFolderCount, unpackFolder, getJSON, removeTask, getTaskCount, setTaskCount, setFolderCount, addTask, getInnerTasks, addFolder, del, setInnerFolders, getInnerFolders, getCluster, getNode });
}

export const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }

    const setRootFolder = (folder) => {
        rootFolder = folder;
    }
    return { setRootFolder, getRootFolder };
})();

export const ButtonForAddFolder = (() => {
    const node = getButtonForAddFolder();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();

export const ButtonForCloseFolder = (() => {
    const node = getButtonForCloseFolder();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();