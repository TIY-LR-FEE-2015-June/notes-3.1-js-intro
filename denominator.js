/**
 * This is used to test if arrays are equal...
 * Unfortunately Javascript doesn't do this...
 */

function arrayEquals(arr1, arr2) {
    return JSON.stringify(arr1) == JSON.stringify(arr2);
}

/**
 * denominators - function
 *
 * This function should take in one number
 * and return an array of all of its denominators
 */
function denominators(num) {
    var denoms = [];

    for (var x = 1; x <= num; x++) {
        if (num % x === 0) {
            denoms.push(x);
        }
    }

    return denoms;
}

console.assert(arrayEquals(denominators(1), [1]));
console.assert(arrayEquals(denominators(3), [1, 3]));
console.assert(arrayEquals(denominators(4), [1, 2, 4]));
console.assert(arrayEquals(denominators(24), [1, 2, 3, 4, 6, 8, 12, 24]));



