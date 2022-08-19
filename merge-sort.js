// Recursion solution for merge sort question.

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const midPoint = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, midPoint));
    const rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf, rightHalf);
};

const merge = (leftArr, rightArr) => {
    const result = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        const nextArrToPush = leftArr[0] < rightArr[0] ? leftArr : rightArr;
        result.push(nextArrToPush.shift());
    };
    return [...result, ...leftArr, ...rightArr];
}

console.log(mergeSort([0, -1, -2, 1, 5, 3, 4, -3, 2])); // [-3, -2, -1, 0, 1, 2,  3,  4, 5]
console.log(mergeSort([1, 0])); // [0, 1]
console.log(mergeSort([0, -100, 98, 23, 100000, -88])); // [-100, -88, 0, 23, 98, 100000]