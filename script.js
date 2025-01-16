// function timeLimited(fn, t) {
//     return async function (...args) {
//         return Promise.race([
//             fn(...args),
//             new Promise((_, reject) => 
//                 setTimeout(() => reject(new Error('Function timed out')), t))
//         ])
//     }
// }



// a function that returns a function.
function createMultipler(factor) {
    return function(number) {
        return number * factor
    }
}

const double = createMultipler(2)

console.log(double(5))

// a function that returns customised greeting.

function greeting(name) {
    return function(message) {
        return `${message} ${name}`
    }
}

const greet = greeting('kobby')

console.log(greet('hello'))
console.log(greet('hi'))

// example of how to use Promise.race
// const promise1 = new Promise((resolve) => {
//     setTimeout(resolve, 500, 'First')
// } )

// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Second'))
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Third'))

// Promise.race([promise1, promise2, promise3])
//     .then((value) => console.log(value))
//     .catch((error) => console.error(error))