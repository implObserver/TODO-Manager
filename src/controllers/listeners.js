import { Folder, OpenedFolder } from "../models/folderModels";
import { FolderLink } from "../models/linkOfPath";
import { OpenedTask } from "../models/taskModels";
import { createFolder, openFolder } from "./foldersControllers";
import { closeCluster, openCluster } from "./linksControllers";
import { createTask, openTask } from "./taskControllers";

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

    const forTitleInput = (input) => {
        let count = 0;
        let task = OpenedTask.getOpenedTask();
        let content = task.getContent();
        let container = content.querySelector('.task-body');
        const pressEnter = input.addEventListener('keyup', e => {
            e.preventDefault();
            task.setInput(input);

            if (e.keyCode !== 8 && input.value === '') {
                ++count;
                console.log(count)
            }

            if (e.keyCode !== 8 && input.value !== '') {
                count = 0;
            }

            if (e.keyCode === 13) {
                let newInput = document.querySelector('.template-input').cloneNode();
                newInput.className = 'task-input';
                container.appendChild(newInput);
                newInput.focus();
                forTitleInput(newInput);
            }

            if (e.keyCode === 8) {
                if (input.value === '') {
                    ++count;
                    if (count === 2) {
                        if (content.querySelector('.title') !== input) {
                            container.removeChild(input);
                            task.removeInput(input);
                            let newInput = task.getInputs().at(-1);
                            newInput.focus();
                        }
                    }
                }
            }
        })
    }

    return { forTitleInput, forTask, forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLink, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}