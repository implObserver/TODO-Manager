const wrapper = document.querySelector('.wrapper');

export const viewFolder = (node) => {
    let content = document.querySelector('.content');
    console.log(content)
    content.appendChild(node);
}