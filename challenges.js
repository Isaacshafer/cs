

// 1) The runtime for this should be O(n^2) because of the nested loop
let array = [28, 43, -12, 30, 4, 0, 12]
function sumZero (arr) {
let value = "False"
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = "True"
      } 
    }
  }
} return value
}

console.log(sumZero(array))

//  2) The runtime for this function is O(n)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  console.log(hasUniqueChars('zebra'))

//    3) Runtime complexity is O(n)

function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }
 console.log(pangrams('asdklc cuwerisdvnwqwe'))

//   4) Runtime complexity is O(n)
function findLongestWord(arr) {
    let longestWord = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
      longestWord = arr[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord(["hi", "hello"]));
  