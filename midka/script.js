let word = "Hello";
let reversed_word = "";

for(let i = word.length-1; i >= 0; i--){
    reversed_word += word[i];
}

console.log(reversed_word);