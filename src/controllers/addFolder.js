import { Folder } from "../models/folderModels";
import { viewFolder } from "../views/nodes/content";
import { addFolderListeners } from "./listeners";

const mainFolder = Folder(0);

export const createFolder = (folder = mainFolder) => {
    let newFolder = folder.addFolder();
    viewFolder(newFolder.getNode());
    addFolderListeners(newFolder);
}


