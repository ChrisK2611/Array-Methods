const person = ["Paul", "Walker", "Fast and Furious"];
const friends = ["Alpy", "Elisa", "Alpay"];
const favoriteFood = ["Reis", "Wiener Schnitzel", "Fisch"];




console.log(person);
console.log(person.length);
console.log(person.push("Chris", "Bridges"));
console.log(person);

console.log(friends);
console.log(friends.lenght);
console.log(friends.push("Roman", "Timo"));
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.lenght);
console.log(favoriteFood.push("Kaiserschmarrn", "Donuts"));
console.log(favoriteFood);

let firstPerson = person.unshift("Dwayne", "Johnson");
let firstFriend = friends.unshift("Roman", "Timo");
let firstFavoriteFood = favoriteFood.unshift(!"Burger", "Ente");

console.log(firstPerson);
console.log(firstFriend);
console.log(firstFavoriteFood);

console.log(person);
console.log(friends);
console.log(favoriteFood);

