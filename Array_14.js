// const arry = [1,2,3,4,5,6];


// console.log(arry);
// //output:[ 1, 2, 3, 4, 5, 6 ]

// console.log(typeof arry);
// //output:object

// console.log(arry.length);
// //output:6

// // Note: Indexing of array always starts from 0

// console.log(arry[0]);
// //output:1

// console.log(arry[1]);
// //output:2

// console.log(arry[2]);
// //output:3

// console.log(arry[3]);
// //output:4

// console.log(arry[4])
// //output:5

// const Myheroes = ["Amir khan","Thor","captan America","krish","Doctor sarve palli radhakrishnan "];

// // console.log(Myheroes);
// //output: [ 'Amir khna', 'Thor', 'captan America', 'krish' ]

// console.log(Myheroes[4])


// <--------------------------------------------------- Array Methods ------------------------------------------->


// const studentName = ["Suraj Raj","Ankit","Rohit","abhishek","Raj"];
// console.log(studentName);

// studentName.push("ajay","vijay","kartik");
// console.log(studentName)


// studentName.pop();
// console.log(studentName);

// studentName.unshift("Hacker","Hacking","CyberSecurity");
// console.log(studentName);

// studentName.shift()
// console.log(studentName)

// studentName.shift()
// console.log(studentName)


//output:
// [
//   'Suraj Raj', 'Ankit',   
//   'Rohit',     'abhishek',
//   'Raj',       'ajay',    
//   'vijay',     'kartik'   
// ]


// Note: push() ==> push function we are used for add element backside in array
// Note: pop() ==> pop funtion we are used for remove element backside in array

// note:unshift() ==> unshift function we are used for add element front side in array
// note:shift() ==> shift function we are used for remove element front side in array



// includes():methods

// console.log(studentName.includes("Suraj Raj"))
// // output:false 
 
// console.log(studentName.includes("Ankit"));
// // output:True

// console.log(studentName.indexOf("Raj"));
// //output:4

// // slice , splice



const Marvel_heroes = ["thor","ironman","spiderman"];
const Dc_heroes = ["Siperman","Flash","batman"]; 


// Marvel_heroes.push(Dc_heroes);
// console.log(Marvel_heroes);

// output: [ 'thor', 'ironman', 'spiderman', [ 'Siperman', 'Flash', 'batman' ] ];

// Note: jab ek array mein dusre array ko push kiya jata hai to yah dono apas mein marge nhi hote hai balki another array as string add ho jata hai marge nahi hota hai .......................!

// is array mein total 4 element hai : 1.thor 2.ironman 3.spiderman 4.['spiderman','Flash','batman'];

// console.log( typeof Marvel_heroes[0]);
// console.log(Dc_heroes[0][1]);

const all = Marvel_heroes.push(Dc_heroes);
console.log(all);



