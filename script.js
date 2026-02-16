//find the longest word in a string

// const findLongestWord = (str) => {
//     if (str.trim().length == 0){
//         return false;
//     }
//     asce
//   let words = str.split(" ");
//       words = words.sort((a,b) => a.length - b.length);
//   console.log(words);
//       return words.at(-1);
// desc
//  let words = str.split(" ");
//       words = words.sort((a,b) => b.length - a.length);
//       console.log(words);
//       return words[0];
      
//       return words.reduce( (accum, currWord) => (currWord.length > accum.length ? currWord : accum), "");
// }

//  console.log(findLongestWord("Watch Thapa technical javascript awesomethapatechnical course on youtube"));

// generate a hashtag from a string
// const generateHash = (str) => {
//     if (str.length > 280 || str.trim().length === 0){
//         return false;
//     }
    
//    str = str.split(" ");
//    str = str.map((currElem) => 
// //   currElem.replace(currElem[0], currElem[0].toUpperCase())
//    currElem.charAt(0).toUpperCase() + currElem.slice(1)
//    );
//    str = `#${str.join("")}`;
//       console.log(str);
//   return str;
// }

// console.log(generateHash("My name is thapa technical"));

// count occurences of a character in a string
// const countChar = (word, char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase()
    
//     let totalCount = word.split("").reduce((acc, curr) => {
//         if (curr === char){
//             acc++;
//         }
//         return acc;
//     }, 0)
//     return totalCount;
// }
// console.log(countChar("MissIopiai","I"))
 
// Input: "MissIopiai", "I"
// Convert both to lowercase → "missiopiai", "i"
// Split → ["m","i","s","s","i","o","p","i","a","i"]
// Reduce:
// "m" → not "i" → acc = 0
// "i" → match → acc = 1
// "s" → no → acc = 1
// "s" → no → acc = 1
// "i" → match → acc = 2
// "o" → no → acc = 2
// "p" → no → acc = 2
// "i" → match → acc = 3
// "a" → no → acc = 3
// "i" → match → acc = 4
// Output: 4

// sort an array in ascending order
// const ascendingSort = (arr) => {
// return arr.sort((a,b) => a - b)
// }
// console.log(ascendingSort([9,6,4,5,2,8]));

