import { start } from './controllers/commonControllers';
import { setResizeObservers } from './controllers/foldersControllers';
import { laodElements } from './controllers/localStorageControllers/common';
import './views/css/main.css'
import { viewRootPathsThree } from './views/nodes/links';

if (localStorage.length > 0) {
    laodElements();
} else {
    start(RootFolder.getRootFolder());
}

setResizeObservers();
viewRootPathsThree();