import { RootFolder, RootLink, createFolder, openFolder, setResizeObservers, viewPathsTree } from './controllers/foldersControllers'
import { addLinkToPath, setListenerfForLink } from './controllers/linksOfPath';
import './views/css/main.css'
import { viewRootPathsThree } from './views/nodes/pathsContainers';

const start = () => {
    const rootFolder = RootFolder.getRootFolder();
    setListenerfForLink(rootFolder.getLink());
    setResizeObservers();
    viewRootPathsThree();
}

start();

for (let i = 0; i < 1; i++) {
    createFolder();
}