import { openClusterWhenAddingFolder, setListenerfForLink } from "../../controllers/linksControllers";
import { setListeners } from "../../controllers/listeners";
import { Tools } from "../../helper/tools"
import { OpenedFolder, RootFolder } from "../../models/folderModels";
import { OpenedTask } from "../../models/taskModels";

export const viewRootPathsThree = () => {
    let link = RootFolder.getRootFolder().getLink();
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
    document.querySelector('.delete-link').style.display = 'none';
}

const getTemplateLinkNode = (name, node) => {
    const nodeWrapper = Tools.createNode('div', 'link-wrapper');
    const linkBody = Tools.createNode('div', 'link-body');
    const nodeLink = Tools.getNodeWithSpan('div', `${name}`, 'link');
    const del = Tools.createNode('div', 'delete-link');
    del.appendChild(document.querySelector('.delete').cloneNode(true));
    Tools.appendChilds(linkBody, node, nodeLink, del);
    Tools.appendChilds(nodeWrapper, linkBody);
    let color = Tools.random_rgba();
    nodeWrapper.style.borderLeft = `0.3vh ${color} solid`;
    nodeWrapper.style.borderTop = `0.3vh ${color} solid`;
    setBorderColor(nodeWrapper);
    return nodeWrapper;
}

const setBorderColor = (node) => {
    let color = Tools.random_rgba();
    node.style.borderLeft = `0.3vh ${color} solid`;
    node.style.borderTop = `0.3vh ${color} solid`;
}

export const getFolderLinkNode = (name) => {
    let template = getTemplateLinkNode(`\\${name}`, forFolder());
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
    const taskIcon = getTaskSvg();
    taskPreview.appendChild(taskIcon);
    return taskPreview;
}

export const getTaskSvg = () => {
    return document.querySelector('.task-link-svg').cloneNode(true);
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

export const viewLink = (link) => {
    let container = OpenedFolder.getOpenedFolder().getCluster();
    let innerTasks = OpenedFolder.getOpenedFolder().getInnerTasks();
    container.style.paddingLeft += '1vh';
    if (innerTasks.length > 0 && link.getType() === 'folder') {
        let lastNode = innerTasks.at(0).getLink().getNode();
        container.insertBefore(link.getNode(), lastNode);
    } else {
        container.appendChild(link.getNode());
    }
    openClusterWhenAddingFolder(OpenedFolder.getOpenedFolder());
}

export const viewLinkOpenedFolder = (folder) => {
    let openedFolderLink = OpenedFolder.getOpenedFolder().getLink().getNode();
    openedFolderLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    folder.getLink().getNode().querySelector('.link').style.backgroundColor = '#60d0e4';
    OpenedFolder.setOpenedFolder(folder);
}

export const viewLinkOpenedTask = (task) => {
    let openedTask = OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        let openedTaskLink = OpenedTask.getOpenedTask().getLink().getNode();
        openedTaskLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    }
    task.getLink().getNode().querySelector('.link').style.backgroundColor = '#ffe5b6';
    OpenedTask.setOpenedTask(task);
}

const setSvgForMainLink = (() => {
    const button = document.querySelector('.set-visible-paths');
    const svg = getNodeArrowRight();
    button.appendChild(svg);
})();