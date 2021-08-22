const feline = {legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Canine'};


//order matters, both objects being spread have a key of 'family', feline will be overwritten by canine because it comes second
const catDog = {...feline, ...canine}
console.log(catDog)
//{ legs: 4, family: 'Caninae', isFurry: true }

const catsDog = {...canine, ...feline}
console.log(catsDog)
//{ isFurry: true, family: 'Felidae', legs: 4 }

const catssDog = {...canine, family: 'Steele'}
console.log(catssDog)
//{ isFurry: true, family: 'Steele' }

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false}
console.log(newUser)