while (true) {
  let text = prompt("Enter a string to count 'e'");

  if (text === null || text.trim() === "") {
    break;
  }

  if (!/^[a-zA-Z\s]+$/.test(text)) {
    alert("Invalid input! Please enter letters only.");
    continue; 
  }
 
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "e" || text[i] === "E") {
      count++;
    }
  }

  alert("Number of 'e': " + count);
}
