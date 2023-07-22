import { getFolderNode } from "../views/nodes/folder";
import { getButtonForAddFolder } from "../views/nodes/ButtonForAddFolder";
import { getButtonForCloseFolder } from "../views/nodes/ButtonForCloseFolder";
import { createCluster } from "../views/nodes/pathsContainers";

export const Folder = (ids, folder = 0) => {
    let id = ids;
    let name;
    let link;
    let count = 0;
    let parent = folder;
    let cluster = createCluster();
    const node = getFolderNode(id);
    const innerFolders = []

    const addFolder = (folder) => {
        const newId = `${id}_${count}`;
        ++count;
        let newFolder = Folder(newId, folder);
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        console.log(this);
    }

    const getNode = () => {
        return node;
    }

    const getId = () => {
        return id;
    }

    const getInnerFolders = () => {
        return innerFolders;
    }

    const setParent = (newParent) => {
        parent = newParent;
    }

    const getParent = () => {
        return parent;
    }

    const setName = (val) => {
        name = val;
    }

    const getName = () => {
        return name;
    }

    const setLink = (node) => {
        link = node;
    }

    const getLink = () => {
        return link;
    }

    const getCluster = () => {
        return cluster;
    }

    return { getCluster, getLink, setLink, setParent, getParent, addFolder, del, getNode, getInnerFolders, getId, setName, getName };
}

export const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }
    return { getRootFolder };
})();

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