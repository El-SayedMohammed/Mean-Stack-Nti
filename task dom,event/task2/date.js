function getDayName(dateString) {
  const date = new Date(dateString);

  
  if (isNaN(date)) {
    return "Invalid date ";
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

let input;
let result;

while (true) {
  input = prompt("Enter a date (YYYY-MM-DD):");
  result = getDayName(input);

  if (result.startsWith("Invalid")) {
    alert(result); 
  } else {
    alert("The day is: " + result);

  }
}
