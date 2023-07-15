import { getFolderNode } from "../views/nodes/folder";

export const Folder = (ids) => {
    let id = ids;
    let count = 0;
    const innerFolders = []
    const node = getFolderNode(id);

    const addFolder = () => {
        const newId = `${id}_${count}`;
        ++count;
        let newFolder = Folder(newId);
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        console.log(this);
    }

    const getNode = () => {
        return node;
    }

    const getInnerFolders = () => {
        return innerFolders;
    }

    return { addFolder, del, getNode, getInnerFolders };
}