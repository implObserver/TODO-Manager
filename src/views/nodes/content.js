const wrapper = document.querySelector('.wrapper');

export const viewFolder = (node, flag = 'folder') => {
    let content = document.querySelector('.content');
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