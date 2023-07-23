import { createFolder, openFolder, setResizeObservers } from './controllers/foldersControllers'
import { setListenerfForLink } from './controllers/linksOfPath';
import { OpenedFolder, RootFolder } from './models/folderModels';
import './views/css/main.css'
import { viewRootPathsThree } from './views/nodes/pathsContainers';

const start = () => {
    const rootFolder = RootFolder.getRootFolder();
    setListenerfForLink(rootFolder.getLink());
    setResizeObservers();
    viewRootPathsThree();
}

start();

document.querySelector('.folders').appendChild(document.querySelector('.task'));

for (let i = 0; i < 0; i++) {
    createFolder();
    let folder = OpenedFolder.getOpenedFolder().getInnerFolders()[0];
    openFolder(folder)
}