// The non-recursive solution of Fibonacci sequence question.

const fibs = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextFib = arr[i-1] + arr[i-2];
        arr.push(nextFib);
    };
    return arr;
};

// The recursive solution of Fibonacci sequence question.

const recFibs = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    return [...recFibs(n - 1), recFibs(n - 1)[n - 2] + recFibs(n - 2)[n - 3]];
};

console.log('Non-recursive:');
console.log(fibs(2)); //[0, 1]
console.log(fibs(5)); //[0, 1, 1, 2, 3]
console.log(fibs(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log('Recursive:');
console.log(recFibs(2)); //[0, 1]
console.log(recFibs(5)); //[0, 1, 1, 2, 3]
console.log(recFibs(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]