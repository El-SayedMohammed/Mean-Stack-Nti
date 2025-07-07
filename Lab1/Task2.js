
let word = prompt("Enter word:");
let caseSensitive = confirm("Should the comparison be case sensitive?");

function isPalindrome(str, isCaseSensitive) {
  let cleanStr = isCaseSensitive ? str : str.toLowerCase();
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

if (isPalindrome(word, caseSensitive)) {
  alert("Palindrome");
} else {
  alert("Not Palindrome");
}
