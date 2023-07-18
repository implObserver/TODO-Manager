import { getLink } from "../../controllers/linksOfPath";
import { Tools } from "../../helper/tools";
import { OpenedFolder } from "../../models/folderModels";
import { Link } from "../../models/linkOfPath";

const wrapper = document.querySelector('.wrapper');

export const viewFolder = (node, flag = 'folder') => {
    let content = document.querySelector('.folders');
    Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');
    if (flag === 'close') {
        content.appendChild(node);
    } else if ('task') {
        content.insertBefore(node, content.lastChild);
    } else if ('folder') {
        content.insertBefore(node, content.lastChild);
    } else if ('add') {
        content.insertBefore(node, content.firstChild);
    }
}

export const addLinkToPath = () => {
    let link = getLink();
    let path = document.querySelector('.chain-folders');
    path.appendChild(link.getNode());
    path.scrollLeft = path.scrollWidth;
}

export const getLinkNodes = (name) => {
    let nodeWrapper = Tools.createNode('div', 'link-wrapper');
    let nodeLink = Tools.getNodeWithSpan('div', `/${name}`, 'link');
    nodeWrapper.appendChild(nodeLink);
    return nodeWrapper;
}

export const removeLinkInPath = () => {
    let path = document.querySelector('.chain-folders');
    path.removeChild(path.lastChild);
}