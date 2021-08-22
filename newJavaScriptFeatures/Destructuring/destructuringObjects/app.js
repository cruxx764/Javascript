const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the dirst openly',
    city: 'San Francisco',
    state: 'California'
}

//old method
const fistName = user.firstName;
const lastName = user.lastName;

// new method which accesses the 'email' property in the above object and creates a new vairable called 'email' 
const {email} = user;
//is equivalent to 
const email = user.email;

// can also be used to change variable name, 'born' is assiged to 'birthYear' 
const {born: birthyear, died: deathYear} = user;

// can also have default properties 
const {city, state, death = 'not dead yet'} = user;
console.log(death)

