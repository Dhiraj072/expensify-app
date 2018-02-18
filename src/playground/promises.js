const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        reject('Something went wrong!');
    }, 1500);
});

console.log('before');

// catch like this //
promise.then((data) => {
    console.log(data);
}).catch((error) => {        
    console.log('Error: ' + error);
});

// or catch like this //
// promise.then((data) => {
//     console.log(data);
// }, (error) => {        
//     console.log('Error: ' + error);
// });

console.log('after');