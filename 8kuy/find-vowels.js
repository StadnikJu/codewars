
function getVowelCount(sentence) {
  const wovels = ["a", "o", "u", "e", "i", "y"];
  let count = 0;
  for(let i = 0; i < sentence.length; i++) {
    if(wovels.indexOf(sentence[i].toLowerCase()) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(getVowelCount("sentence"));