import { getFolderLinkNode, getLinkNodes, getTaskLinkNode } from "../views/nodes/pathsContainers";

const Link = (iElement) => {
    let element = iElement;
    let name = element.getId();
    let node;

    const getElement = () => {
        return element;
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

    return { setNode, getNode, getName, getElement };
}

export const FolderLink = (folder) => {
    let prototype = Link(folder);
    prototype.setNode(getFolderLinkNode(prototype.getName()));
    const getFolder = () => {
        return prototype.getElement();
    }
    return Object.assign({}, prototype, { getFolder });
}

export const TaskLink = (task) => {
    let prototype = Link(task);
    prototype.setNode(getTaskLinkNode(prototype.getName()));
    const getTask = () => {
        return prototype.getElement();
    }

    return Object.assign({}, prototype, { getTask });
}

export const ClusterLink = (folder) => {
    let prototype = FolderLink(folder);
    let cluster = folder.getCluster();
    const getCluster = () => {
        return cluster;
    }

    return Object.assign({}, prototype, { getCluster });
}