import { openFolder } from "../controllers/foldersControllers";
import { getButtonForAddTask } from "../views/nodes/ButtonForAddTask";
import { getTaskNode } from "../views/nodes/task";
import { Element } from "./element";
import { OpenedFolder } from "./folderModels";

export const Task = (id) => {
    const prototype = Element(id);
    const node = getTaskNode(id);

    const getNode = () => {
        return node;
    }

    const del = (e) => {
        let parent = OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        openFolder(parent);
    }

    return Object.assign({}, prototype, { del, getNode });
}

export const ButtonForAddTask = (() => {
    const node = getButtonForAddTask();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();