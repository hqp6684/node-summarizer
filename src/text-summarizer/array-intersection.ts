
export function getIntersection<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    // filter duplicated values
    // new _array variables to avoid modifiying original arrays
    // since getUniqueElement return a new array (new reference)
    let _array1 = getUniqueElements(array1);
    let _array2 = getUniqueElements(array2);
    let intersection = new Array<T>();
    let longerArray = getLongerArray(_array1, _array2);
    let shorterArray = getShorterArray(_array1, _array2);

    shorterARray.map(element => {

    })
    intersection = [];


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