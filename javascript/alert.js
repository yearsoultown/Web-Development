// alert("I'm JavaScript!");

// let admin;
// let name;
// name = 'Yersultan';
// admin = name;
// alert(admin);

// let surname = prompt("What is your surname?", '')
// alert(`Your full name is ${name} ${surname}!`)

// let a = 4;
// let b = 5;
// let c = 9 * (a = b + 10 - 6) // = computes, and returns result for further operations
// alert(c)

// alert('$' + 4 + 5)

// WHILE loop
// let i = 3;
// do {
//   alert(i);
//   i--
// } while (i);


// FOR loop
// outer: for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert('Done!');

// SWITCH cases --> type matters
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// CONSOLE.LOG
// for (let i = 0; i < 5; i++) {
//   console.log("value,", i);
// }

// let name = "Yersultan";
// console.log("Name: ", name);

let array = [1,2,3,4,5]
// let sum = 0;

// for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//         sum += array[i] * 2;
//     }
// }

// alert(sum);

// alert(array.reverse())

const jsonString = '{"name": null, "age": null}';
const jsonParse = JSON.parse(jsonString);

if(jsonParse.name === null){
    jsonParse.name = "Unknown";
}

if(jsonParse.age === null){
    jsonParse.age = 0;
}

console.log(jsonParse);

reversed_array = array.reverse();
console.log(reversed_array);