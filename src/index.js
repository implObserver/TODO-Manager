import { start } from './controllers/commonControllers';
import { setResizeObservers } from './controllers/foldersControllers';
import { laodElements } from './controllers/localStorageControllers/common';
import { RootFolder } from './models/folderModels';
import './views/css/main.css'
import { viewRootPathsThree } from './views/nodes/links';
localStorage.clear()
if (localStorage.length > 0) {
    laodElements();
} else {
    start(RootFolder.getRootFolder());
}

setResizeObservers();
viewRootPathsThree();