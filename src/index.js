import { createFolder, openFolder } from './controllers/foldersControllers'
import { Folder } from './models/folderModels';
import './views/css/main.css'
import { addLinkToPath } from './views/nodes/content';

let zeroFolder = Folder(0);
zeroFolder.setParent(zeroFolder);
openFolder(zeroFolder);
addLinkToPath(zeroFolder);