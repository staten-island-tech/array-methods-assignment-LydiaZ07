// //Array's a list
// const arr = [3, 6, 9];

// console.log(arr[0]); //0 index
// console.log(arr[1]); //0 index
// console.log(arr[2]); //0 index
// console.log(arr[3]); //0 index

// const arr2 = [true, false, "yay1!", [3,6,7], null, 9];
// console.log(arr2.length); //the amount of items in the array


// arr2.push("pushed"); //add an element and put it in the end
// arr2.unshift("hi"); //add an element and put it in the beginning
// arr2.pop(); //removes the last element 
// console.log(arr2);


// //objects 

// const monkey ={
//     firstName: "monkey",
//     lastName: "Monkeyson",
//     bananaCount: 25,
//     alive: true,
//     addBanana: function(){ 
//         //method 
//         this.bananaCount++; // adds 1 banana to banana count
//     },
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`;
//     },

// };
// monkey.addBanana()
// console.log(monkey.getFullName());
const array = [`red`, 'orange', 'yellow', 'green', 'blue', 'purple']
array.forEach(element => console.log(element));
array.forEach(element => console.log(array));
