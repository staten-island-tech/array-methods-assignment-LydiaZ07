
const rainbow = [
    { name: 'red', numbers:[1,2,3,4], object: `apple`, count:28 },
    { name: 'orange', numbers:[5,6,7,8], object: `orange`, count: 15 },
    { name: 'yellow', numbers:[9,10,11,12], object: `banana`, count: 30 },
    { name: 'green', numbers:[13,14,15,16], object: `color`, count: 9 },
    { name: 'blue', numbers:[17,18,19,20], object: `sky`, count: 1 },
    { name: 'purple', numbers:[21,22,23,24], object: `heart`, count: 80 }
];
    rainbow.forEach(item => console.log(item.name));
   
    function row(){
        rainbow.forEach((item) => {
            item.numbers.forEach((colorNum) => {
                console.log(colorNum);
            });
        });
    }
row();

const filter = rainbow.filter((fil) => fil.count >15);
console.log(filter);
