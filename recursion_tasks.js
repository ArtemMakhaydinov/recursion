// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const recSumMult = (n) => {
    if (n < 3) return 0;
    return ((n % 3 === 0) || (n % 5 === 0)) ? n + recSumMult(n - 1) : recSumMult(n - 1);
};

console.log(recSumMult(9)); // 23
console.log(recSumMult(999)); // 233168


// ==============================================================================
// Even Fibonacci numbers
// By considering the terms in the Fibonacci sequence whose values do not exceed 4 000 000, find the sum of the even-valued terms.

const evenFibs = (arr) => {
    if (arr[arr.length - 1] > 4000000) {
        return arr.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);
    };
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return evenFibs(arr);
};

console.log(evenFibs([0, 1])); // 4613732


// ==============================================================================
// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = (num, factor = 2, factors = []) => {
    if (num < 2) return factors;
    if (num % factor === 0) {
        factors.push(factor);
        largestPrimeFactor(num / factor, factor, factors);
    } else {
        largestPrimeFactor(num, factor + 1, factors)
    };
    return factors[factors.length - 1];
};

console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857


// ==============================================================================
// Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindrome = (a, b) => {
    const arr = (a * b).toString().split('');
    const midPoint = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midPoint);
    const rightHalf = arr.slice(midPoint);
    if (
        arr[arr.length - 1] !== 0 &&
        parseInt(leftHalf.join('')) === parseInt(rightHalf.reverse().join(''))) {
            return [a, b, a * b];
        };
    if (b < 1) {
        return largestPalindrome (a-1, a);
    } else {
        return largestPalindrome (a, b - 1);
    };
};

console.log(largestPalindrome(99, 99)); // [99, 91, 9009]
console.log(largestPalindrome(999, 999)); // [995, 583, 580085]


// ==============================================================================
// Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMult = (n) => {
    if (
        (n !== 0)
        * (n % 20 === 0) 
        * (n % 19 === 0)
        * (n % 18 === 0)
        * (n % 17 === 0)
        * (n % 16 === 0)
        * (n % 15 === 0)
        * (n % 14 === 0)
        * (n % 13 === 0)
        * (n % 12 === 0)
        * (n % 11 === 0)
    ) {
        return n;
    }
    return smallestMult(n + 20 * 19 * 17 * 13 * 11);
};

console.log(smallestMult(0)); // 232792560