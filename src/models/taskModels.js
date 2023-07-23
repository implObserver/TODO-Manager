import { getButtonForAddTask } from "../views/nodes/ButtonForAddTask";
import { getTaskNode } from "../views/nodes/task";
import { Element } from "./element";

export const Task = (id) => {
    const prototype = Element(id);
    const node = getTaskNode();
    const getNode = () => {
        return node;
    }

    return { getNode };
}

export const ButtonForAddTask = (() => {
    const node = getButtonForAddTask();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();