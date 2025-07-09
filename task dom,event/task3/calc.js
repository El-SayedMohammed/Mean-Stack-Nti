
let Answer = document.getElementById("Answer");


function EnterNumber(num) {
    Answer.value += num;
}

function EnterOperator(op) {
    Answer.value += op;
}


function EnterEqual() {
    try {
        Answer.value = eval(Answer.value);
    } catch (error) {
        Answer.value = "Error";
    }
}


function EnterClear() {
    Answer.value = "";
}


document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        EnterNumber(key);
    }

    if (["+", "-", "*", "/"].includes(key)) {
        EnterOperator(key);
    }

    if (key === "Enter") {
        EnterEqual();
    }

    if (key === "Escape") {
        EnterClear();
    }
});
