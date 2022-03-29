const obj1 = {
    name: 'Ram',
    age: 21
};

const obj2 = {
    name: 'Ram',
    age: 23
};

const objectsimilar = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
                && obj2[key] === obj1[key]);
    }
    return false;
}
document.write(objectsimilar(obj1, obj2));