const input = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array) {
    if (array.length <= 1) {
        return [...array];
    }

    const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    const right = mergeSort(array.slice(Math.floor(array.length / 2)));

    const sortedArray = [];
    let i = 0;
    let j = 0;

    // Merge step: compare elements one by one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Add leftovers from either array
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

console.log(mergeSort(input));
