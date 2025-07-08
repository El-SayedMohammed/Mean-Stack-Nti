while (true) {
  let numbers = [];

  for (let i = 0; i < 3; i++) {
    let num;

    while (true) {
      num = prompt(`Enter number ${i + 1}:`);

      if (num === null || num.trim() === "" || isNaN(num)) {
        alert("Invalid input. Please enter **numbers only**.");
      } else {
        numbers.push(Number(num));
        break; 
      }
    }
  }

  let sum = numbers[0] + numbers[1] + numbers[2];
  let multiplication = numbers[0] * numbers[1] * numbers[2];
  let division = numbers[0] / numbers[1] / numbers[2];

  alert(`${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum}`);
  alert(`${numbers[0]} * ${numbers[1]} * ${numbers[2]} = ${multiplication}`);
  alert(`${numbers[0]} / ${numbers[1]} / ${numbers[2]} = ${division}`);


}
