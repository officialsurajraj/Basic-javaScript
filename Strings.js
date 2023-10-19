const string = "this is me";
console.log(string);
// output: this is me 

console.log(typeof string);
// output: string

console.log(typeof Number(string));
// output:number

console.log(string);
// output:this is me

console.log(typeof string);

// output:string;

// note: not change original value when you change a datatypes

const changeOriginalValue = Number(string);
console.log(changeOriginalValue);

// output:NaN

console.log(typeof changeOriginalValue);

//output:number

console.log(typeof Boolean(changeOriginalValue));
// output:boolean

console.log(typeof changeOriginalValue);
// output:number

const covertBoolean = Boolean (changeOriginalValue);
console.log(covertBoolean);

//output:false

console.log(typeof covertBoolean);

// output:boolean


// <-------------------- String Defined in another ways -------------------->

const newValue = new String("This is me");
console.log(newValue);
//output: [String: 'This is me']

console.log(typeof newValue);
//output:object

console.log(typeof Number(newValue));
//output:number

console.log(typeof newValue);
//output:object


// <------------------------------------------ Strings Methods --------------------------------->

const obj = new String ("sharelink.com");
console.log(obj);
//output: [String: 'sharelink.com']

console.log(obj.length);
// output:33

console.log(obj.charAt());
// output:s 

console.log(obj.toUpperCase());
// output:SHARELINK.COM

