function getConsonantCount(sentence) {
  const vowels = ["a", "o", "u", "e", "i", "y"];
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase(); 
    if (char >= "a" && char <= "z" && vowels.indexOf(char) === -1) {
      count++;
    }
  }

  return count;
}