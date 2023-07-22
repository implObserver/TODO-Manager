import { OpenedFolder } from "../models/folderModels";
import { createFolder, openFolder } from "./foldersControllers";
import { closeCluster, openCluster } from "./linksOfPath";

export const setListeners = () => {
    const forFolder = (currentFolder) => {
        let node = currentFolder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            openFolder(currentFolder);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            createFolder();
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = OpenedFolder.getOpenedFolder();
            openFolder(openedFolder.getParent());
        });
    }

    const forLinkOfMapPaths = (link) => {
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            openFolder(link.getFolder());
        });
        const mouseOverNode = node.addEventListener('mouseover', e => {
            e.stopPropagation();
            node.style.backgroundColor = '#9cfd9c';
        });
        const mouseOutNode = node.addEventListener('mouseout', e => {
            e.stopPropagation();
            node.style.backgroundColor = '#e9f5e9';
        });
    }

    const forButtonToClusterPaths = (node, link) => {
        let flag;
        const clickNode = node.addEventListener('click', e => {
            flag = document.defaultView.getComputedStyle(link.getCluster()).display;
            if (flag === 'none') {
                openCluster(link);
            } else {
                closeCluster(link);
            }
        });
        return { close };
    }

    return { forButtonToClusterPaths, forLinkOfMapPaths, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}