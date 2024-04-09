//! nested objects = Objects inside of other Objects.
//?                  Allows you to represent more complex data structures
//?                  Child Object is enclosed by a Parent Object

//*                  Person{Adress{}, ContactInfo{}}
//*                  Shopping{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullname: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);

//* for loop to get all adress

// for(const property in person.address){
//     console.log(person.address[property]);
// }

//* Ex. Complicated

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", 
                                          "Bikini Bottom", 
                                          "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                            "Bikini Bottom", 
                                            "Int. Waters");

console.log(person3.name);