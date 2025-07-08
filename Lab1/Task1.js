function addNumbers(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number" || isNaN(nums[i])) {
            return "Enter only numbers";
        }
        result += nums[i];
    }

    return result;
}

let nums = [2, 4, 6, 8];

alert("Result is: " + addNumbers(nums));
