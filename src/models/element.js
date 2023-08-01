import { OpenedFolder } from "./folderModels";

export const idRegister = (() => {
    let load = localStorage.getItem('idRegister');
    let register = load === null ? [] : load;

    const addId = (id) => {
        register.push(id);
        localStorage.setItem('idRegister', JSON.stringify(register));
    }

    const getIdRegister = () => {
        return register;
    }

    return { addId, getIdRegister };
})()

export const Element = (ids) => {
    let name = '';
    let link;
    let parent = OpenedFolder.getOpenedFolder();

    let id = parent === undefined ? 0 : `${parent.getId()}_${ids}`;

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

    const setId = (val) => {
        id = val;
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

    return {
        setId, getId, setName, getName, setLink, getLink, setParent, getParent,
    }
}