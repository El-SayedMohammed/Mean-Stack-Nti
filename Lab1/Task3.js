    let text = prompt("Enter a string to count 'e':");
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i] === "e") {
        count++;
      }
    }

    alert("Number of 'e': " + count);