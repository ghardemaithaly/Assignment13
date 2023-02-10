/* 1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
*/
let number= [1,2,3,4,5];
console.log(number)
const sum = number.reduce(function (inital,end){
    return inital + end;

},0)
const average = number.reduce((start,end)=>{
    return start + end;
},0) / number.length;
console.log(sum)
console.log(average);
