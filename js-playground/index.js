// const person = {
//   name: "John Doe",
//   age: 10,
//   walk: function () {
//     console.log("walking");
//   },
// };

// const targetMember = "name";
// person.name
// person["name"]
// console.log(person[targetMember]);
// const firstName = "John";
// const lastName = "Doe";

// // const fullName = firstName + " P. " + lastName;
// const fullName = `${firstName} P. ${lastName}`;
// console.log(fullName);

// const color = "red";
// const name = false && 19;

// console.log(name);

//truthy values:
//1. "asdasdasd"
//2. any non zero number
//3. true
//4. any object {}
//5. []

// console.log(!!"");

//falsy values:
//1. ""
//2. 0
//3. false
//4. null
//5. undefined
//6. NaN

//this keyword
// "use strict";
// const person = {
//   name: "John Doe",
//   walk() {
//     console.log(this);
//   },
// };

// person.walk();
// const walk = person.walk.bind(person);
// walk();

// function squareNumber(number) {
//   return number * number;
// }

// const squareNumber = (number, anotherNumber) => number * number + anotherNumber;

// console.log(squareNumber(5, 2));

// const person = {
//   name: "John Doe",
//   talk() {
//     //var self = this;
//     setTimeout(() => {
//       console.log(this);
//     }, 1000);
//   },
// };

// person.talk();
// "use strict";

// const person = {
//   name: "John Doe",
//   talk() {
//     //var self = this;
//     setTimeout(() => {
//       console.log(this);
//     }, 1000);
//   },
// };

// person.talk();

// const tags = [
//   { id: 1, value: "tag1" },
//   { id: 2, value: "tag2" },
//   { id: 3, value: "tag3" },
// ];
// const tags = ["tag1", "tag2", "tag3"];
// const updatedTags = tags.map((tag, index) =>
//   index % 2 === 0 ? `<h1>${tag}</h1>` : "i dont know"
// );
// console.log(updatedTags);

// function deleteTagById(id) {
//   return tags.filter((tag) => tag.id !== id);
// }
const city = "Muntinlupa";

// console.log(deleteTagById(2));
const address = {
  city: "Pasig",
  region: "NCR",
  street: "Some Street",
};

// const city = address.city;
// const region = address.region;
// const street = address.street;
// const { city: cty, region: rgn, street: st } = address;

// console.log(cty);
// console.log(region);
// console.log(st);

// function logAddress({ city: cty, region, street }) {
//   console.log(`My city is: ${cty}`);
//   console.log(`My region is: ${region}`);
//   console.log(`My street is: ${street}`);
// }

// logAddress(address);
// const numbers = [1, 2, 3];
// const numbersAgain = [4, 5, 6];

// // const combined = numbers.concat(numbersAgain);
// const combined = [19, ...numbers, 20, 99, ...numbersAgain];
// console.log(combined);

// const numbers = [1, 2, 3];
// const clone = [...numbers];

// numbers[0] = false;

// console.log(clone === numbers);

// const person = {
//   name: "John Doe",
// };

// const personDetails = {
//   age: 21,
// };

// const combined = { ...person, isMarried: false, ...personDetails };

// const clone = { ...person };
// person.name = "Mary";

// // console.log(clone);

// function logPerson({ name, ...person }) {
//   console.log(name);
//   console.log(person);
// }

// logPerson(combined);

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} is walking.`);
  }
}

// const person = new Person("John Doe");
// // person.walk();

// class Trainer extends Person {
//   constructor(name, topic) {
//     super(name);
//     this.name = name;
//     this.topic = topic;
//   }
//   train() {
//     console.log(`${this.name} is training ${this.topic}.`);
//   }
// }

// const trainer = new Trainer("LJ", "React");
// trainer.train();

// export const name = "John Doe";

// export const another = "Mary Johnson";

// export const another2 = "LJ";

// export default "Something";

export function login() {
  console.log("Logging in");
}

export function register() {
  console.log("Registering");
}

export function logout() {
  console.log("Logging out");
}
