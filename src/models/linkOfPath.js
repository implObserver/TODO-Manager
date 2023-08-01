import { getFolderLinkNode, getTaskLinkNode } from "../views/nodes/links";

export const Link = (element) => {
    let parent = element;
    let id = parent.getId();
    let name = id;
    let node;

    const getElement = () => {
        return parent;
    }

    const getName = () => {
        return name;
    }

    const getNode = () => {
        return node;
    }

    const setNode = (iNode) => {
        node = iNode;
    }

    const setName = (val) => {
        name = val;
    }

    return { setName, setNode, getNode, getName, getElement };
}

export const FolderLink = (folder) => {
    let type = 'folder';
    let prototype = Link(folder);
    prototype.setNode(getFolderLinkNode(prototype.getName()));
    const getFolder = () => {
        return prototype.getElement();
    }
    const getType = () => {
        return type;
    }
    return Object.assign({}, prototype, { getFolder, getType });
}

export const TaskLink = (task) => {
    let type = 'task';
    let prototype = Link(task);
    prototype.setNode(getTaskLinkNode(prototype.getName()));
    const getTask = () => {
        return prototype.getElement();
    }
    const getType = () => {
        return type;
    }
    return Object.assign({}, prototype, { getTask, getType });
}

export const ClusterLink = (folder) => {
    let prototype = FolderLink(folder);
    let cluster = folder.getCluster();
    const getCluster = () => {
        return cluster;
    }

    return Object.assign({}, prototype, { getCluster });
}