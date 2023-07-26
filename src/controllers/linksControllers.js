import { Tools } from "../helper/tools";
import { ClusterLink, TaskLink } from "../models/linkOfPath";
import { getNodeArrowDown, getNodeArrowRight, viewLink } from "../views/nodes/links";
import { setListeners } from "./listeners";

export const closeCluster = (link) => {
    let cluster = link.getCluster();
    switchCloseButtonSvg(link, getNodeArrowRight());
    Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

export const openCluster = (link) => {
    let cluster = link.getCluster();
    switchCloseButtonSvg(link, getNodeArrowDown());
    cluster.style.display = 'grid';
    Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

export const setListenerfForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    setListeners().forLink(link);
    if (clusterClose !== null) {
        setListeners().forButtonToClusterPaths(clusterClose, link);
    }
    setListeners().forButtonToDeleteLink(link);
}

const switchCloseButtonSvg = (link, child) => {
    let close = link.getNode().querySelector('.close-cluster');
    Tools.removeChilds(close);
    close.appendChild(child);
}

export const openClusterWhenAddingFolder = (folder) => {
    let cluster = folder.getCluster();
    let button = folder.getLink().getNode().querySelector('.close-cluster');
    if (folder.getId() !== 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
        openClusterWhenAddingFolder(folder.getParent());
    } else if (folder.getId() === 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
    }
}

export const addLinkToPath = (element, type = 'folder') => {
    let link = type === 'folder' ? getCustomLink(element) : TaskLink(element);
    setListenerfForLink(link);
    element.setLink(link);
    viewLink(link);
}

export const getCustomLink = (folder) => {
    const link = ClusterLink(folder);
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
    return link;
}