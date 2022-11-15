/*Conditional statements and Data types Practical task 
1. Perform addition of various types (string + boolean, string + number, number + boolean)
2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
3. Divide different types (string / boolean, string / number, number / Boolean)
4. Perform explicit conversion (number, string, boolean)*/

let str = '4', num = 3, boo = false;
console.log(typeof a, typeof b, typeof boo); 

/*1. Perform addition of various types (string + boolean, string + number, number + boolean)*/ 
console.log('TASK 1');

let strnum = str+num,
    srtboo = str+boo;
    numboo = num+boo;
console.log(strnum, srtboo, numboo); 
console.log(typeof strnum, typeof srtboo, typeof numboo); 

/*/2. Perform multiplication of various types (string * boolean, string * number, number * boolean)*/
console.log('TASK 2');

strnum = str*num,
srtboo = str*boo;
numboo = num*boo;

console.log(strnum, srtboo, numboo); 
console.log(typeof strnum, typeof srtboo, typeof numboo); 


/*3. Divide different types (string / boolean, string / number, number / Boolean)*/
console.log('TASK 3');

strnum = str/num,
srtboo = str/boo;
numboo = num/boo;

console.log(strnum, srtboo, numboo); 
console.log(typeof strnum, typeof srtboo, typeof numboo); 

/*4. Perform explicit conversion (number, string, boolean)*/
console.log('TASK 4');

let strToNum = Number(str),
srtToBoo = Boolean(str),
numToBoo = Boolean(num),
numTostr = String(num),
BooToNum = Number(boo);

console.log(strToNum, srtToBoo, numToBoo, numTostr, BooToNum); 
console.log(typeof strToNum, typeof srtToBoo, typeof numToBoo, typeof numTostr, typeof BooToNum); 




 /* 

 var arr = ['4', 'Hello string', 3, true]; //array of vars with different types 
 
for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++){
        console.log(`arr${i} + arr${j} = ${arr[i]} + ${arr[j]}`); 
        console.log(typeof `${arr[i]} + ${arr[j]}`);  
    }
 }

 for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++){
        console.log(`arr${i} * arr${j} = ${arr[i]} * ${arr[j]}`); 
        console.log(typeof `${arr[i]} '*' ${arr[j]}`);  
    }
 }
*/