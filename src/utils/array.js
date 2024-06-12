


export const deepCloneArray = (arrayToClone) => {
    return JSON.parse(JSON.stringify(arrayToClone))
}

export const findIndexInArray = (id, array) => {
    return array.findIndex(el => el.id === id )
}