import { setListenerfForLink } from "../../controllers/linksOfPath";
import { Tools } from "../../helper/tools"
import { RootFolder } from "../../models/folderModels";

export const viewRootPathsThree = () => {
    let link = RootFolder.getRootFolder().getLink();
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
}

export const openPathsSideBar = () => {
    const container = document.querySelector('.path-container');
    Tools.addClasses(container, 'open');
    return container;
}

export const getLinkNodes = (name) => {
    const nodeWrapper = Tools.createNode('div', 'link-wrapper');
    const closeCluster = Tools.createNode('div', 'close-cluster');
    const arrowRight = getNodeArrowRight();
    const nodeLink = Tools.getNodeWithSpan('div', `/${name}`, 'link');
    closeCluster.appendChild(arrowRight);
    Tools.appendChilds(nodeWrapper, closeCluster, nodeLink);
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