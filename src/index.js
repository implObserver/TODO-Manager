import { start } from './controllers/commonControllers';
import { createFolder, openFolder, setResizeObservers } from './controllers/foldersControllers'
import { addLinkToPath, setListenerfForLink } from './controllers/linksControllers';
import { laodElements, loadFoldersElements } from './controllers/localStorageControllers';
import { Folder, OpenedFolder, RootFolder } from './models/folderModels';
import { FolderLink } from './models/linkOfPath';
import './views/css/main.css'
import { viewLink, viewRootPathsThree } from './views/nodes/links';

if (localStorage.length > 0) {
   laodElements();
} else {
    start(RootFolder.getRootFolder());
}

setResizeObservers();
viewRootPathsThree();