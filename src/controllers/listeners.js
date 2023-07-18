import { Tools } from "../helper/tools";
import { OpenedFolder } from "../models/folderModels";
import { addLinkToPath, removeLinkInPath } from "../views/nodes/content";
import { getPathsContainer } from "../views/nodes/pathsContainer";
import { createFolder, openFolder, setFontSizeToFolders } from "./foldersControllers";

export const setListeners = () => {
    const forFolder = (currentFolder) => {
        let node = currentFolder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            openFolder(currentFolder);
            addLinkToPath(currentFolder);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            createFolder();
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = OpenedFolder.getOpenedFolder();
            removeLinkInPath();
            openFolder(openedFolder.getParent());
        });
    }

    const forLinkOfPath = (link) => {
        let path = document.querySelector('.chain-folders');
        let node = link.getNode();
        const clickNode = node.addEventListener('click', e => {
            Tools.removeChildsAfter(path, node);
            openFolder(link.getFolder());
        });
    }

    const forButtonToOpenPaths = () => {
        let node = document.querySelector('paths');
        const clickPaths = node.addEventListener('click', e => {
            let container = getPathsContainer();

        });
    }

    const forWIndow = (() => {
        const resize = window.addEventListener('resize', e => {
            setFontSizeToFolders();
        });
    })();

    return { forFolder, forButtonToAddFolder, forButtonToCloseFolder, forLinkOfPath }
}