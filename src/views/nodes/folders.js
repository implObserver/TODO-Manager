import { Tools } from "../../helper/tools";
import { OpenedFolder } from "../../models/folderModels";
import { ButtonForAddTask } from "../../models/taskModels";
import { getButtonForAddTask } from "./ButtonForAddTask";

const wrapper = document.querySelector('.wrapper');

export const viewElement = (node, flag = 'folder') => {
    let content = document.querySelector('.folders');
    let innerTasks = OpenedFolder.getOpenedFolder().getInnerTasks();
    Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');

    const forOldElement = () => {
        content.insertBefore(node, content.lastChild);
    }

    const forNewElement = () => {
        if (flag === 'task') {
            content.insertBefore(node, content.lastChild);
        } else if (flag === 'folder') {
            let lastNode = innerTasks.length > 0 ? innerTasks.at(0).getNode() : content.lastChild;
            content.insertBefore(node, lastNode);
        }
    }

    return { forNewElement, forOldElement };
}
