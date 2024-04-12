
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

// 30 done
