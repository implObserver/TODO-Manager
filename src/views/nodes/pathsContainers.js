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

export const getLinkNodes = (name) => {
    const nodeWrapper = Tools.createNode('div', 'link-wrapper');
    const closeCluster = Tools.createNode('div', 'close-cluster');
    const linkBody = Tools.createNode('div', 'link-body');
    const arrowRight = getNodeArrowRight();
    const nodeLink = Tools.getNodeWithSpan('div', `/${name}`, 'link');
    const del = Tools.createNode('div', 'delete-link');
    del.appendChild(document.querySelector('.delete').cloneNode(true));
    closeCluster.appendChild(arrowRight);
    Tools.appendChilds(linkBody, closeCluster, nodeLink, del)
    Tools.appendChilds(nodeWrapper, linkBody);
    return nodeWrapper;
}

export const getNodeArrowDown = () => {
    return document.querySelector('.arrow-down').cloneNode(true);
}

export const getNodeArrowRight = () => {
    return document.querySelector('.arrow-right').cloneNode(true);
}

/*export const getPathsCluster = (folders, pLink) => {
    const cluster = Tools.createNode('div', 'paths-cluster');
    pLink.setCluster(cluster);
    cluster.style.paddingLeft += `${1}vh`;
    for (let folder of folders) {

        const link = ClusterLink(folder);
        linkCfg(link, folder);
        folder.setLink(link);

        const iFolders = folder.getInnerFolders();
        cluster.appendChild(link.getNode());
        if (iFolders.length > 0) {
            cluster.appendChild(getPathsCluster(iFolders, link));
        }
    }
    return cluster;
}*/

export const linkCfg = (link, folder) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    setListenerfForLink(link);
}

export const createCluster = () => {
    const cluster = Tools.createNode('div', 'paths-cluster');
    return cluster;
}