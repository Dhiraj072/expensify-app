//
// Object destructuring
//

// const person = {
//     name: 'Dhiraj',
//     city: 'Singapore',
// };

// // Default value
// // Rename
// const { name = 'Anon', city: cityname } = person;

// console.log(name); // outputs Dhiraj
// console.log(cityname); // outputs Singapore

//
// Array destructuring
//

// const address = ['1299', 'Penn', 'USA'];
const address = [];
const [street = '44', city, ] = address;

console.log(street);