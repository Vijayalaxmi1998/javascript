function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(array) {
    return array.filter(num => isPrime(num));
}

const numbers = [10, 55, 13, 11, 1, 0, 77, 16, 17];
const primeNumbers = findPrimes(numbers);

console.log("Prime Numbers:", primeNumbers);
console.log(Math.sqrt(numbers));