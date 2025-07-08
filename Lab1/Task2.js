while (true) {
  let word = prompt("Enter a string to check if it's a Palindrome");

  if (word === null || word.trim() === "") {
    break;
  }

  if (!/^[a-zA-Z]+$/.test(word)) {
    alert("Invalid input! Please enter letters only.");
    continue; 
  }

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
}
