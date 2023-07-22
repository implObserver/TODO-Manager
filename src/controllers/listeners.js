import { Tools } from "../helper/tools";
import { OpenedFolder } from "../models/folderModels";
import { threePathsCloseToggle } from "../models/linkOfPath";
import { createFolder, openFolder } from "./foldersControllers";
import { addLinkToPath, closeCluster, openCluster, removeLinkInPath } from "./linksOfPath";

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
            //window.scrollTo(0, document.body.scrollHeight);
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
            console.log('w')
            flag = document.defaultView.getComputedStyle(link.getCluster()).display;
            if (flag === 'none') {
                openCluster(link);
            } else {
                closeCluster(link);
            }
        });
        return { close };
    }

    const forFolders = (() => {

    })();

    return { forButtonToClusterPaths, forLinkOfMapPaths, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}