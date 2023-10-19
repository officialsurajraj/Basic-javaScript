
// function myfunction(){
//     console.log("S");
//     console.log("U");
//     console.log("R");
//     console.log("A");
//     console.log("J");

// }
// myfunction     :---- this is a function reference
// output: nothing

// myfunction()  :  ------- function call & Executation

// output: S ,  U , R , A , J  in vertically side 

// <------------------------------------------ Basic Function ------------------------------------------->


function AddTwoNumber(number1 , number2 ){     // number1 and number is perameters
    console.log(number1 + number2);
}
AddTwoNumber()   //  output: NaN
AddTwoNumber(3,5);  // output: 8 
// Note : (3,5)number value this is arguments not a parameters

AddTwoNumber(3,"5"); // output: 35 concate
AddTwoNumber("3",5); // output: 35 concate

AddTwoNumber(3,"abc"); //output : 3abc concate

AddTwoNumber(3,null); // output:3

AddTwoNumber(3,undefined); // output:NaN

const Result = AddTwoNumber (10 ,10);
//output:20

console.log(Result);
// undefined
