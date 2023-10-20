const array = [1,2,3,4,5,6];


console.log(array);

// output:[ 1, 2, 3, 4, 5, 6 ]

console.log(typeof array);
// output:object

console.log(array.length);
//output:6

// Note: Indexing of array always starts from 0

console.log(array[0]);
//output:1

console.log(array[1]);
//output:2

console.log(array[2]);
//output:3

console.log(array[3]);
//output:4

console.log(array[4])
//output:5

const Myheroes = ["Amir khan","Thor","captan America","krish","Doctor sarve palli radhakrishnan "];

console.log(Myheroes);
output: [ 'Amir khna', 'Thor', 'captan America', 'krish' ]

console.log(Myheroes[4])


// <--------------------------------------------------- Array Methods ------------------------------------------->


const studentName = ["Suraj Raj","Ankit","Rohit","abhishek","Raj"];
console.log(studentName);
// output: ['Suraj Raj','Ankit','Rohit','abhishek','Raj'];

studentName.push("ajay","vijay","kartik");
console.log(studentName)
// output: ['Suraj Raj','Ankit','Rohit','abhishek','Raj','ajay','vijay','kartik'];

studentName.pop();
console.log(studentName);
// output: ['Suraj Raj','Ankit','Rohit','abhishek','Raj','ajay','vijay'];

studentName.unshift("Hacker","Hacking","CyberSecurity");
console.log(studentName);
// output: ['Hacker','Hacking','CyberSecurity','Suraj Raj','Ankit','Rohit','abhishek','Raj','ajay','vijay'];


studentName.shift()
console.log(studentName)
// output: ['Hacking','CyberSecurity','Suraj Raj','Ankit','Rohit','abhishek','Raj','ajay','vijay'];

studentName.shift()
console.log(studentName)
// output: ['CyberSecurity','Suraj Raj','Ankit','Rohit','abhishek','Raj','ajay','vijay'];


// Note: push() ==> push function we are used for add element backside in array
// Note: pop() ==> pop funtion we are used for remove element backside in array

// note:unshift() ==> unshift function we are used for add element front side in array
// note:shift() ==> shift function we are used for remove element front side in array



// includes():methods
// Note : indcludes() : methods ka use hum apni puri array se yah pta lagane ke liye karte hai jo hum value de rahe hai bo array mein 
// present hai ya nhi agar value present hogi to hume output true milenega otherwise hume false output milenga.

console.log(studentName.includes("Suraj Raj"))
// output:false 
 
console.log(studentName.includes("Ankit"));
// output:True

console.log(studentName.indexOf("Raj"));
//output:4

// slice , splice



const Marvel_heroes = ["thor","ironman","spiderman"];
const Dc_heroes = ["Siperman","Flash","batman"]; 


Marvel_heroes.push(Dc_heroes);
console.log(Marvel_heroes);

output: [ 'thor', 'ironman', 'spiderman', [ 'Siperman', 'Flash', 'batman' ] ];

// Note: jab ek array mein dusre array ko push kiya jata hai to yah dono apas mein marge nhi hote hai balki another array as string add ho jata hai marge nahi hota hai .......................!

// is array mein total 4 element hai : 1.thor 2.ironman 3.spiderman 4.['spiderman','Flash','batman'];

console.log( typeof Marvel_heroes[0]);
// output:string 
// output string ayenga array nhi kyuki hum marvel_heroes ke 0 index ki typeof nikal rahe hai to 0 index per humara thor aata hai or thor ek string hai array nhi

console.log(Dc_heroes[0][1]);
// output:i
// output isme hum Dc_heroes ke 0 indexing ke 1 letter ko print kara rahe hai to humara 0 indexing par ironman aata hai or lekin hum ironman ke first letter ko print kara rahe hai jo ki i hai





