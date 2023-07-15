import { openFolder } from './controllers/foldersControllers'
import { Folder } from './models/folderModels';
import './views/css/main.css'
let zeroFolder = Folder(0);
openFolder(zeroFolder);