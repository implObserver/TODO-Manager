import { OpenedFolder } from "./folderModels";

export const Element = (ids) => {
    let id = ids;
    let name;
    let link;
    let count = 0;
    let parent = OpenedFolder.getOpenedFolder();

    const getId = () => {
        return id;
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

    const setParent = (newParent) => {
        parent = newParent;
    }

    const getParent = () => {
        return parent;
    }

    const setCount = () => {
        ++count;
    }

    const getCount = () => {
        return count;
    }

    return {
        getId, setName, getName, setLink, getLink, setParent, getParent, setCount, getCount
    }
}