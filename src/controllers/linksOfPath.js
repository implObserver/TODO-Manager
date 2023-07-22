import { Tools } from "../helper/tools";
import { getNodeArrowDown, getNodeArrowRight } from "../views/nodes/pathsContainers";
import { setListeners } from "./listeners";

export const closeCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    Tools.removeChilds(close);
    close.appendChild(getNodeArrowRight());
    Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

export const openCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    Tools.removeChilds(close);
    close.appendChild(getNodeArrowDown());
    cluster.style.display = 'grid';
    Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

export const setListenerfForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    setListeners().forLinkOfMapPaths(link);
    setListeners().forButtonToClusterPaths(clusterClose, link);
}