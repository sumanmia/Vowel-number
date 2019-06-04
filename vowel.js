function findsVowel(str) {
  let vowels = "";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowels += str[i];
    }
  }
  return vowels.length;
}

console.log(findsVowel("she was a very angry girl, i didn't like her"));
