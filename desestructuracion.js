// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) // 'Tesla',
// console.log(otherRandomCar)  //'Mercedes'



const cars = ['Tesla', 'Mercedes', 'Honda'];
const [ ramdomCar, otherRandomCar] = cars;

console.log(ramdomCar, otherRandomCar);   //Reducimos nuestra linea de codigo a 3// el autput es 'Tesla', 'Mercedes'



const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // name is not defined
console.log(otherName); //otherName no existe como funcion anidada en name, por lo tanto se imprimirá


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); //12345
// console.log(hashedPassword); //undefined, no esta definda por lo tanto la anidamos en la constante password



const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet',
  password: {
      hashedPassword: '12345'
  }
};
const {name, age, height, password: hashedPassword} = person;
//Predict the output
console.log(hashedPassword); 


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //2 == 3 "false"
console.log(first == third); // 2 == 2 "true"


const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // 'value'
console.log(secondKey); // [1,5,1 8 3,3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5



