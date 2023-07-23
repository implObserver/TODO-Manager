import { setListenerfForLink } from "../../controllers/linksOfPath";
import { setListeners } from "../../controllers/listeners";
import { Tools } from "../../helper/tools"
import { RootFolder } from "../../models/folderModels";

export const viewRootPathsThree = () => {
    let link = RootFolder.getRootFolder().getLink();
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
    document.querySelector('.delete-link').style.display = 'none';
}

export const openPathsSideBar = () => {
    const container = document.querySelector('.path-container');
    Tools.addClasses(container, 'open');
    return container;
}

const getTemplateLinkNode = (name, node) => {
    const nodeWrapper = Tools.createNode('div', 'link-wrapper');
    const linkBody = Tools.createNode('div', 'link-body');
    const nodeLink = Tools.getNodeWithSpan('div', `/${name}`, 'link');
    const del = Tools.createNode('div', 'delete-link');
    del.appendChild(document.querySelector('.delete').cloneNode(true));
    Tools.appendChilds(linkBody, node, nodeLink, del);
    Tools.appendChilds(nodeWrapper, linkBody);
    return nodeWrapper;
}

export const getFolderLinkNode = (name) => {
    let template = getTemplateLinkNode(name, forFolder());
    return template;
}

export const getTaskLinkNode = (name) => {
    let template = getTemplateLinkNode(name, forTask());
    return template;
}

const forFolder = () => {
    const closeCluster = Tools.createNode('div', 'close-cluster');
    const arrowRight = getNodeArrowRight();
    closeCluster.appendChild(arrowRight);
    return closeCluster;
}

const forTask = () => {
    const taskPreview = Tools.createNode('div', 'task-preview');
    const taskIcon = getNodeArrowRight();
    taskPreview.appendChild(taskIcon);
    return taskPreview;
}

export const getTaskSvg = () => {
    return document.querySelector('.taskSvg').cloneNode(true);
}

export const getNodeArrowDown = () => {
    return document.querySelector('.arrow-down').cloneNode(true);
}

export const getNodeArrowRight = () => {
    return document.querySelector('.arrow-right').cloneNode(true);
}

export const linkCfg = (link, folder) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    setListenerfForLink(link);
}

export const createCluster = () => {
    const cluster = Tools.createNode('div', 'paths-cluster');
    return cluster;
}