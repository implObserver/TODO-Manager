import { getFolders } from "./folders";
import { getTasks } from "./tasks";

export const viewLinks = () => {
    let folders = getFolders();
    let tasks = getTasks();
    for (let folder of folders) {
        viewLink(folder);
    }
    for (let task of tasks) {
        viewLink(task);
    }
}

const viewLink = (folder) => {
    let parent = folder.getParent();
    parent.getCluster().appendChild(folder.getLink().getNode());
}