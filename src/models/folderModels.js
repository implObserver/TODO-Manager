import { getFolderNode } from "../views/nodes/folder";
import { getButtonForAddFolder } from "../views/nodes/ButtonForAddFolder";
import { getButtonForCloseFolder } from "../views/nodes/ButtonForCloseFolder";

export const Folder = (ids, folder = 0) => {
    let id = ids;
    let count = 0;
    const parent = folder;
    const innerFolders = []
    const node = getFolderNode(id);

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

    const getParent = () => {
        return parent;
    }

    return { getParent, addFolder, del, getNode, getInnerFolders, getId };
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