// Write a JavaScript program to reverse a given string.
// 1)
// const str = 'anuj Yadav';

// const reverseString = str.split("").reverse().join("");

// console.log(reverseString)

// 2)

// const str  = "anuj Yadav";

// let reversedStr = '';

// for(let i = str.length - 1; i >= 0 ; i--){

// reversedStr = reversedStr + str[i]

// }

// console.log(reversedStr)

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// const str  = "NAN";

// let reversedStr = '';

// for(let i = str.length - 1; i >= 0 ; i--){

// reversedStr = reversedStr + str[i]

// }

// if(str === reversedStr){
//     console.log('Its palindrome')
// }
// else{
//     console.log('not palindorme')
// }



// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

// let num1 = "2"

// let num2 = "3"

// function product(a,b){

//     let c = a * b
//    return c.toString()
    
// }

// console.log(typeof(product(num1,num2)))


// write a program to reverse word in the given string.



const str = 'Anuj Yadav' //,[juna vaday]

let reversedStr = '';


function reverseString(str){

    let words = str.split(' ')
    // console.log(words.length)

for(let i = 0; i < words.length; i++){
 words[i] = words[i]?.split('').reverse().join('')

// reverseString = str.split(' ').reverse().join('')
// console.log(reverseString)

}

return words.join(' ')
}

console.log(reverseString(str))
// solve above by only reversing the 2nd word yadav.







