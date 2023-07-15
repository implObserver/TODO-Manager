import { viewFolder } from "../views/nodes/content";

export const addFolderListeners = (currentFolder) => {
    let node = currentFolder.getNode();
    const clickFolder = node.addEventListener('click', e => {
        let folders = currentFolder.getInnerFolders();
        console.log(1);
        for (let folder of folders) {
            const node = folder.getNode();
            viewFolder(node);
        }
    });
}