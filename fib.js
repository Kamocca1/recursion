function fibs(n) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            array.push(0);
        } else if (i === 1) {
            array.push(1);
        } else array.push(array[array.length - 2] + array[array.length - 1]);
    }
    return array;
}

function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    let array = fibsRec(n - 1);
    array.push(array[array.length - 2] + array[array.length - 1]);
    return array;
}

console.log(fibs(8));
console.log(fibsRec(8));
