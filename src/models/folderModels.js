import { getFolderNode } from "../views/nodes/folder";
import { getButtonForAddFolder } from "../views/nodes/ButtonForAddFolder";
import { getButtonForCloseFolder } from "../views/nodes/ButtonForCloseFolder";
import { createCluster, getPathsCluster } from "../views/nodes/pathsContainers";

export const Folder = (ids, folder = 0) => {
    let id = ids;
    let count = 0;
    let name;
    let parent = folder;
    const innerFolders = []
    const node = getFolderNode(id);
    let link;
    let cluster = createCluster();

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