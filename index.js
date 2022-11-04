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


// const array = [`red`, 'orange', 'yellow', 'green', 'blue', 'purple']
// array.forEach(element => console.log(element));

const rainbow = [
    { name: 'red', numbers:[1,2,3,4], object: `apple`, count:28 },
    { name: 'orange', numbers:[5,6,7,8], object: `orange`, count: 15 },
    { name: 'yellow', numbers:[9,10,11,12], object: `banana`, count: 30 },
    { name: 'green', numbers:[13,14,15,16], object: `color`, count: 9 },
    { name: 'blue', numbers:[17,18,19,20], object: `sky`, count: 1 },
    { name: 'purple', numbers:[21,22,23,24], object: `heart`, count: 80 }
];
    rainbow.forEach(item => console.log(item.name));
    rainbow.forEach(item => console.log(item.numbers));
    rainbow.forEach(item => console.log(item.object));
    rainbow.forEach(item => console.log(item.count));

// const new = rainbow.filter(rainbow.count > 10);
// console.log(new);