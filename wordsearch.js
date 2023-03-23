/* ------------------Discussions----------------------- 
---Contributors (Jeremy Lee, Kimia Kalantari, Marijke Van Hell) 
  lists of cases
1. searches letters (vertical cases & horizontal cases)
2. reverse word cases 

  Checklists  ✅
1. the function that searches word - cover case 1 [✅]
   - Hypothesis: If we use the transepose function from last week, it should 
                 transpose word matrix so that we can also check for vertical cases ???
   - Possible Tests: console.log(transpose(letters)) and check
                     how the letters on vertical line are transposed  
  
2. the function that make reversed wordsets - cover case 2 [✅]
   - Hypothesis: Just simply use .split().reverse().join() ????
   - Possible Tests: console.log(wordReverser(word)) and check if we are gett
*/

const transpose = function (matrix) {
  let tempArr = [];
  for (let R = 0; R < matrix[0].length; R++) {
    tempArr.push([]);
    for (let C = 0; C <matrix.length; C++) {
      tempArr[R].push(matrix[C][R]);
    }
  }
  return tempArr; 
};

const searchEngine = (letters, word) => { 
  const wordJoin = letters.map(ls => ls.join(''))
  for (l of wordJoin) {
      if (l.includes(word)) 
      return true
  }
}

const wordReverser = function (word) {
  const reversed = word.split('').reverse().join('');
  return reversed;
}
const wordSearch = (letters, word) => { 
  if (searchEngine(letters, word) || searchEngine(letters, wordReverser(word))) {
    return true
  } else if (searchEngine(transpose(letters), word) || searchEngine(transpose(letters), wordReverser(word))) {
    return true
  }
  return false;
}
module.exports = wordSearch