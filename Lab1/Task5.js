    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    let num3 = Number(prompt("Enter third number:"));

    let arr = [num1, num2, num3];
    let sum = arr[0] + arr[1] + arr[2];
    let multiplication = arr[0] * arr[1] * arr[2];
    let division = arr[0] / arr[1] / arr[2];

    alert(`${arr[0]} + ${arr[1]} + ${arr[2]} = ${sum}`);
    alert(`${arr[0]} * ${arr[1]} * ${arr[2]} = ${multiplication}`);
    alert(`${arr[0]} / ${arr[1]} / ${arr[2]} = ${division}`);