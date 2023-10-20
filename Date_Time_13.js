const mydate = new Date();
console.log(mydate);
// output: 2023-10-15T17:48:29.658Z

console.log(typeof mydate);
 // output:object

console.log(typeof Number(mydate));
 // output:number

console.log(typeof mydate);
// // output:object

console.log(mydate.toString());
//output: Sun Oct 15 2023 23:21:41 GMT+0530 (India Standard Time)

 console.log(mydate .toDateString());
 //output:Sun Oct 15 2023

console.log(mydate.toISOString());
//output:2023-10-15T17:53:48.353Z

console.log(mydate .toJSON());
// output:2023-10-15T17:54:23.463Z (same result like toSIOString functions)

 console.log(mydate.toTimeString());
 //output:23:25:52 GMT+0530 (India Standard Time)

 console.log(mydate.toUTCString());
 //output:Sun, 15 Oct 2023 17:56:31 GMT

console.log(mydate.getTimezoneOffset());
//output:-330

console.log(mydate .getHours());
//output:23

console.log(mydate .getMonth());
//output:9

console.log(mydate .setHours())
//output:NaN

const mycreateddate = new Date(2023 , 11 ,20);
console.log(mycreateddate.toString());
//output:Wed Dec 20 2023 00:00:00 GMT+0530 (India Standard Time)

// // note: 2023 = years , 0-11 = months , 20 date 

const othercreatetime = new Date(20,11,2023);
console.log(othercreatetime.toString());
//output: Tue Jun 15 1926 00:00:00 GMT+0530 (India Standard Time)

const mycreateddate1 = new Date(2000 , 2 ,2 ,10,7,8);
console.log(mycreateddate1.toString());
// output:Thu Mar 02 2000 10:07:08 GMT+0530 (India Standard Time

console.log(mycreateddate1.toLocaleString());
//output:2/3/2000, 10:07:08 am