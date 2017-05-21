
export function getIntersection<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    // filter duplicated values
    // new _array variables to avoid modifiying original arrays
    // since getUniqueElement return a new array (new reference)
    let uniqueElements1 = getUniqueElements(array1);
    let uniqueElements2 = getUniqueElements(array2);
    let intersection = new Array<T>();
    let longerArray = getLongerArray(uniqueElements1, uniqueElements2);
    let shorterArray = getShorterArray(uniqueElements1, uniqueElements2);

    intersection = shorterArray.filter((element, _index, _arr) => {
        if (typeof element === 'string' || typeof element === 'number') {
            return longerArray.indexOf(element) > -1;
        } else {
            // TODO implement this
            // idea: iterate over the arrays, return JSON.parse(object) === JSON.parse(object)
            return false;
        }
    })

    return intersection;
}

/**
 * 
 * @param array1 
 * @param array2 
 * Return array with longer length
 */
export function getLongerArray<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    if (array1.length >= array2.length) {
        return array1;
    } else {
        return array2;
    }
}
/**
 * 
 * @param array1 
 * @param array2 
 * Return array with shorter length
 */
export function getShorterArray<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    if (array1.length <= array2.length) {
        return array1;
    } else {
        return array2;
    }
}

/**
 * 
 * @param array 
 * Return array that contains non-duplicated values
 */
export function getUniqueElements<T>(array: Array<T>): Array<T> {
    return array.filter((element, index, arr) => {
        return arr.indexOf(element) === index;
    });
}