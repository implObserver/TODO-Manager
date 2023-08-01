import { getFolderNode } from "../views/nodes/folder";
import { getButtonForAddFolder } from "../views/nodes/ButtonForAddFolder";
import { getButtonForCloseFolder } from "../views/nodes/ButtonForCloseFolder";
import { createCluster } from "../views/nodes/links";
import { openFolder } from "../controllers/foldersControllers";
import { Element } from "./element";

export const OpenedFolder = (() => {
    let openedFolder;
    const setOpenedFolder = (folder) => {
        openedFolder = folder;
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

    const addFolder = () => {
        let newFolder = Folder(folderCount);
        setFolderCount();
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        let filter = prototype.getParent().getInnerFolders().filter((folder) => folder !== prototype.getLink().getFolder());
        prototype.getParent().getCluster().removeChild(prototype.getLink().getNode());
        prototype.getParent().setInnerFolders(filter);
        setInnerFolders([]);
        openFolder(prototype.getParent());
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
        }

        return JSON.stringify(list);
    }

    const unpackFolder = (data) => {
        prototype.setId(data.id);
        prototype.setName(data.name);
        prototype.setLink(data.link);
        prototype.setParent(data.parent);
        innerFolders = data.innerFolders;
        innerTasks = data.innerTasks;
        folderCount = data.folderCount;
        taskCount = data.taskCount;
    }

    return Object.assign({}, prototype, { reduceFolderCount, unpackFolder, getJSON, removeTask, getTaskCount, setTaskCount, setFolderCount, addTask, getInnerTasks, addFolder, del, setInnerFolders, getInnerFolders, getCluster, getNode });
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