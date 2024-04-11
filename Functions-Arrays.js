// Write a JavaScript function to calculate the sum of two numbers.

// function Sum(a,b){
//     return a+b;
// }

// console.log(Sum(12,1))

// Write a JavaScript program to find the maximum number in an array.

// const array = [10,20,15,30,15];

// let  max = [0];

// function maxNum(Array){

// for(let i = 1; i < Array.length; i++){

//     if(array[i] > max){
//         max = array[i];
//     }

// }

// return max

// }

// console.log('maxium number:',maxNum(array))

// let str = 'NafwN';

// let reversedStr = '';

// function isPalindrome(){

//     // for(let i = str.length - 1 ; i >= 0; i--){
//     //   reversedStr = reversedStr + str[i];
//     // }

//     // reversedStr = str.split("").reverse().join("")

//     if(reversedStr == str){
//         console.log('its palindrome')
//     }
//     else{
//         console.log('its not palindrome ')
//     }

// }
//    isPalindrome()

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// let array = [2, 1, 7, 10, 4, 6];

// let evenArray = [];

// function arrOfNums(Array) {

//   for (let i = 0; i < Array.length; i++) {

//     if (Array[i] % 2 == 0) {

//       evenArray.push(Array[i])

//     }
//   }

//   return evenArray.sort((a,b)=> a-b );
// }

// console.log("array of evenNumber:", arrOfNums(array));

// clousers

// function helloWorld(){
//     return function(){
//         console.log('hello')
//     }
// }

// helloWorld()()

// let array = [1,2,3,4]

// let newArr = array.map((element)=>element + 1);
// console.log(newArr)

// just see and dry run once.

// const arr = [1, 2, 3, 4, 5];

// function applyMapping(arr) {
//   const transformedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     transformedArray.push(arr[i] * i);
//   }
//   return transformedArray;
// }

// const transformedArray = applyMapping(arr);

// console.log(transformedArray);





// let arr = [0,1,5,10,11,15,20,30] //less than 11 filtered out it

// // let filteredArray = arr.filter((Element) => Element > 10);
// // console.log(filteredArray)

// function filteredFunction(arr){

//     let filteredArray = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 10){
//             filteredArray.push(arr[i]);
//     }
// }

// return filteredArray;

// }
// console.log(filteredFunction(arr))




// const arr = [1,2,3,4,5,6,7,8]; // remove 5th from array output:[1,2,3,4,6,7,8]

// const newArr = arr.filter((ele) => ele !== 5 )

// console.log(newArr)






// const arr = [1,2, , 4, , 5, , , 6]; //op [1, 2, 4, 5, 6];

// const arr = [1,2, , 4, , 5, , , 6, null , 7]; //op [1, 2, 4, 5, 6];



// function myFunctions(arr){

//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== undefined ){
//             newArr.push(arr[i]);

//         }

//     }
//     return newArr;



// }

// console.log(myFunctions(arr))

// // 1)
// const str = "AB_12_CD_20_EF_30"; //  op-> "AB 12 CD 20 EF 30";

// // //  let newString = str.split('_').join(' ')
// // // console.log(newString)

// // // // console.log(str.length)


// let newStr = "";

// for(let i = 0; i<str.length; i++){
//       if(str[i] !== "_"){
//             newStr = newStr + str[i]


            
//       }
// }
// console.log(newStr)




// add(3)(4)(5) function call op--> 3+4+5

// function top(a){
//     return function middle(b){
//         return function bottom(c){
//             return console.log(`${a}+${b}+${c}`);
//         }
//     }
// }

// top(3)(4)(5);









// const arr = ['pune','bangalore','mumbai','goa']; // give me the longest string in the output.
// // console.log(arr.length)

// // let maxStr = '';
// let minStr = arr[0];




// for(let i  = 0; i < arr.length; i++){

// if(arr[i].length < minStr.length){


// minStr = arr[i]a 

// }



// }

// console.log(minStr)

// const arr = ['pune', 'bangalore', 'mumbai', 'goa'];

// const longestString = arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');

// console.log(longestString); // Output: 'bangalore'


//  const arr = [1, 2, 3, 2, 1, 4, 4, 5, 6,9,'1','Hello'];Find element which is not repeated in array
// and also add those non repeating elements into variable total? =






// const arr = [0,0,1,2,3,3,4,5,5,6,7,8] // op [0,1,2,3,4,5,6,7,8]

// let newArr = [];

// // const Array = new Set(arr);
// // console.log(Array)


// for(let i = 0; i< arr.length; i++){ //1,2

//     let isDuplicate = false;

//     for(let j = 0; j < newArr.length; j++){ //1 ,2

//         if(arr[i] == newArr[j]){
//             isDuplicate = true;
//             break;
//         }
//     }

//     if(!isDuplicate){
//         newArr.push(arr[i]) //newArr = []
//     }

// }

// console.log(newArr)



// let arr = new Array(1,2,3);

// console.log(arr)


// let arr = []

// arr.push(1,2,3)

// console.log(arr)



// write js program to flatten the nested array. [1,2,3,[4,5,6],7,8,9] // op [1,2,3,4,5,6,7,8,9]


// push and pop methods to add and remove array elements at the end of array.

// shift and unshift are used when adding and removing elements from the top of the array means start of the array.


// let arr = [];
// arr.push(1,2,3,'hello',4,5,'fruits');

// arr.pop()
// arr.unshift('yadav')
// // arr.shift()
// console.log(arr)



// loops, for loop,while loops
// let i = 0;

// while(i<arr.length){
// console.log(arr[i])
//     i++
// }

// Inbuilt loops methods.


// const numbers = [1,2,3,4,5];

// const x = numbers.map((i) => {
//    return i+1
// })


// console.log(x)

// const numbers = [1,2,3,4,5,6]

// const array = numbers.filter( element => console.log(element % 2) )

// console.log(array)


// const numbers = [1,2,3,4,5,6]

// // const newNums = numbers.reduce((prevValue,item,index,array))

// const newNums = numbers.reduce((prevValue,item)=>{
//     return prevValue+item

// },-1)

// console.log(newNums)




// const numbers = [1,2,3,4,5,6]
// const numbers2 = [7,8,9]

// const array = [...numbers,...numbers2]

// console.log(array)

// function sum(...numbers){
//     return numbers
// }

// console.log(sum(numbers,numbers2),'anuj')























