export const getCounter = () => {
    const count = -1;
    const addFolder = () => {
        ++count;
    }

    const substractFolder = () => {
        --count;
    }
    const getCount = () => {
        return count;
    }
    return { addFolder, substractFolder, getCount };
}