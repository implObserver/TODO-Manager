import { OpenedFolder } from "../models/folderModels";
import { OpenedInput, OpenedTask } from "../models/taskModels";
import { createFolder, openFolder } from "./foldersControllers";
import { closeCluster, openCluster } from "./linksControllers";
import { createTask, openTask, taskContentHandler } from "./taskControllers";

export const setListeners = () => {
    const forFolder = (folder) => {
        let node = folder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            openFolder(folder);
        });
    }

    const forTask = (task) => {
        let node = task.getNode();
        const clickTask = node.addEventListener('dblclick', e => {
            openTask(task);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            createFolder();
        });
    }

    const forButtonToAddTask = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            createTask();
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = OpenedFolder.getOpenedFolder();
            openFolder(openedFolder.getParent());
        });
    }

    const forLink = (link) => {
        let color;
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            try {
                openFolder(link.getFolder());
            } catch {
                openTask(link.getTask());
            }
            color = document.defaultView.getComputedStyle(node).backgroundColor;
        });
        const mouseOverNode = node.addEventListener('mouseover', e => {
            e.stopPropagation();
            color = document.defaultView.getComputedStyle(node).backgroundColor;
            node.style.backgroundColor = '#9cfd9c';
        });
        const mouseOutNode = node.addEventListener('mouseout', e => {
            e.stopPropagation();
            node.style.backgroundColor = color;
        });
    }

    const forButtonToClusterPaths = (node, link) => {
        let flag;
        const clickNode = node.addEventListener('click', e => {
            flag = document.defaultView.getComputedStyle(link.getCluster()).display;
            if (flag === 'none') {
                openCluster(link);
            } else {
                closeCluster(link);
            }
        });
        return { close };
    }

    const forButtonToDeleteLink = (link) => {
        let node = link.getNode().querySelector('.delete-link');
        const clickNode = node.addEventListener('click', e => {

            let element = link.getElement();
            if (confirm('Вы действительно хотите удалить папку и всё ее содержимое?')) {
                element.del(element);
            } else {
            }
        })
    }

    const forTitleInput = (input, content) => {
        let index = 0;
        let container = content.querySelector('.task-body');
        const pressKeys = input.addEventListener('keyup', e => {
            e.preventDefault();
            if (e.keyCode === 13) {
                let newInput = taskContentHandler().getNewInput();
                //console.log(OpenedTask.getOpenedTask().getInputs().indexOf(input));
                OpenedTask.getOpenedTask().spliceInput(index + 1, newInput);
                container.insertBefore(newInput, container.firstChild);
                taskContentHandler().activateInput(newInput);
                forInput(newInput);
            }

            if (e.keyCode === 40) {
                taskContentHandler().setNextinput();
            }

            const leftClick = input.addEventListener('click', e => {
                taskContentHandler().activateInput(input);
            })
        })
    }

    const forInput = (input) => {
        const pressKeysUp = input.addEventListener('keyup', e => {
            e.preventDefault();
            let index = OpenedTask.getOpenedTask().getInputs().indexOf(input);
            if (e.keyCode === 13) {
                let newInput = taskContentHandler().getNewInput();
                OpenedTask.getOpenedTask().spliceInput(index + 1, newInput);
                taskContentHandler().viewNewInput(input, newInput);
                forInput(newInput);
            }
        })

        const pressKeysDown = input.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                if (input.value === '') {
                    taskContentHandler().removeInput();
                }
            }

            if (e.keyCode === 38) {
                taskContentHandler().setPreviousInput();
            }

            if (e.keyCode === 40) {
                taskContentHandler().setNextinput();
            }
        })

        const leftClick = input.addEventListener('click', e => {
            taskContentHandler().activateInput(input);
        })
    }

    return { forTitleInput, forTask, forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLink, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}