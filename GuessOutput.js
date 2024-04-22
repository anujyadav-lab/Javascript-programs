
// let x = 3;
// let y = "3";
// console.log(x - y )



// Problem 2: 
// let a;
// a++; 
// console.log(a);


// let a = 10 , b = 10 ,c = 10;
// if(a == b == c){
//     console.log('hello')
// }
// else{
//     console.log('not')
// }


// let x = 1;

// x++
// console.log(x)

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
  
//   sayHi(); undefined and ReferenceError

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }  3 3 3 and 0 1 2


// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter()); B: 20 and NaN


// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting); Hello


// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// function sum(a, b) {
//     return a + b;
//   }
  
//   sum(1, '2');



// let x = 0;
// // x++

// console.log(x++)
// console.log(x)



// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);






// const arr = [undefined,null,0,false,1]

// const res = arr.filter(a => a);

// console.log(res)

// op--> [ null, 0, false]



// let arr = [{
//     name: 'shubham',
//     subjects: [{ math: 20 }, { history: 30 }, { economics: 50 }],
//     total:null ,
//     },

//     {
//     name: 'rohan',
//     subjects: [{ math: 45 }, { history: 25 }, { economics: 30 }],
//     total:null ,
//     }]

//     // console.log(arr)

//       arr[0].total = arr[0].subjects[0].math + arr[0].subjects[1].history + arr[0].subjects[2].economics
//       arr[1].total = arr[0].subjects[0].math +  arr[0].subjects[1].history + arr[0].subjects[2].economics

//       console.log(arr)


// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });



// function getAge(narpat) {
//     console.log(typeof narpat);
//   }
  
//   getAge(21);

// const arr = [1];

// console.log(typeof(arr))


// function getAge(...args) {
//     console.log(typeof args);
//   }
  
//   getAge(21);


// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// const obj = { a: 'one', b: 'two', a: 'three',narpat:'q',anuj:'e',narpat:'r' }; // three, two, r,e
// console.log(obj);
// The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.

// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// // a[c] = 456;

// console.log(a[b]);


// const narpat = {};

// const anuj = { name:null}


// narpat[anuj] = 'hello' ;


// console.log(narpat[anuj])



// const anuj = {name:'anuj'}; // The default string representation of an object in JavaScript is '[object Object]'.

// const str = anuj.toString();

// console.log(str)
 

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();



// understood

// const object = {name:'narpat'};
//  object.name = 'makwana';

//  console.log(object)






// const obj = ['narpat'];

//  obj[0] = 'mak'
// console.log(obj);






















// const narpat = {name:'na',rollno:12}

// console.log(typeof(narpat))

// const [name,rollno] = narpat

{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */}





// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// let x = sayHi.apply(person, [21])




// console.log(x)
// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// typeOf null is object 
// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());


// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.


// console.log(typeof typeof 1);

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:

// [1, 2, 3, empty x 7, 11]

// depending on where you run it (it's different for every browser, node, etc.)



// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// let person = { name: 'Lydia' };
// const members = [person]; //[{name:'lydia'}] array of object.
// person = null;

// console.log(members);
// let x = 1 ;
// const y = x; // REFERENCE --> 1
// x = 2;  
// console.log(y)

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }



// parseInt(string, [radix]);
// the default radix is 10.

// const num = parseInt(5);

// console.log(num)

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return;
//   return num * 2;
// });

// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear);


// function greeting() {
//   throw 'Hello world!';
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log('It worked!', data);
//   } catch (e) {
//     console.log('Oh no an error:', e);
//   }
// }

// sayHi();



// (() => {
//   let x = (y = 10); //  
//   // console.log(typeof x);

// })();

// console.log(typeof x);

// console.log(typeof y);



// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);



// const name = 'Lydia';
// age = 21;

// console.log(delete name);
// console.log(delete age);
// The delete operator returns a boolean value: true on a successful deletion, else it'll return false.

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log( typeof(y));

// const obj = { name: "John", age: 30, city: "New York" , rollno:123};
// let jsonString = JSON.stringify(obj,['age','rollno']);
// console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// The second argument of JSON.stringify is the replacer. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.


// let jsonString = JSON.stringify(value, replacer, space);

