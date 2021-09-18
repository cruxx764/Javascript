

// resolve and reject are methods which will automatically set the status of the promise 'fullfilled' or 'Rejected' 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
};


//the returned output of 'resolve' can then be passed to the '.then' method 
//or if an error, to the '.catch' 
fakeRequest('/dogs/1')
    .then(() => {
        console.log("DONE WITH REQEUST!")
    })
    .catch((err) => {
        console.log("OH NO!",err)
    })
