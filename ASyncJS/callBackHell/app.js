// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = "green";
// }, 3000);

// Nested version
// setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "red";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "green";
//         }, 1000);
//     }, 1000);
// }, 1000);

//Using function expression

// const delayedColor = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     }, delay);
// };

// //nesting the next style change within the function execution for an additional callback in the above 'delayedColor' function
// delayedColor('purple', 1000, () => {
//     delayedColor('orange', 1000, () => {
//         delayedColor('yellow', 1000, () => {
//             delayedColor('red', 1000, () => {
//                 delayedColor('green', 1000, () => {
//                     delayedColor('blue', 1000, () => {
//                     })
//                 })
//             })
//         })
//     })
// });


//Promise version
const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
};

delayedColorChange('red' , 1000)
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('yellow', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('purple', 1000))