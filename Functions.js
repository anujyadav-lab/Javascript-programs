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



// function reverseWords(str) {
//     // Split the string into an array of words
//     let words = str.split(' ');
    
//     // Iterate over each word and reverse it
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].split('').reverse().join('');
//     }
    
//     // Join the reversed words back into a string
//     return words.join(' ');
// }

// // Example usage
// const originalString = "Hello world";
// const reversedString = reverseWords(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);


