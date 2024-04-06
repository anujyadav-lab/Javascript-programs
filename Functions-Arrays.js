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






const arr = [1,2, , 4, , 5, , , 6]; //op [1, 2, 4, 5, 6];
// const arr = [1,2, , 4, , 5, , , 6, null , 7]; //op [1, 2, 4, 5, 6];



function myFunctions(arr){

    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== undefined ){
            newArr.push(arr[i]);

        }

    }
    return newArr;



}

console.log(myFunctions(arr))



















