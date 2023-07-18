export const Link = (iFolder) => {
    let folder = iFolder;
    let name = folder.getId();
    let node;

    const getFolder = () => {
        return folder;
    }

    const getName = () => {
        return name;
    }

    const setNode = (val) => {
        node = val;
    }

    const getNode = () => {
        return node;
    }

    return { getNode, getName, setNode, getFolder };
}