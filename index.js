const name = document.getElementById("name");
const inputheight = document.getElementById("inputheight");
const inputweight = document.getElementById("inputweight");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const resultsname = document.getElementById("resultsname");
const status = document.getElementById("status");
const results = document.getElementById("results");
const resetbutton = document.getElementById("resetbutton");



document.getElementById("submit").onclick = function() {
    // name of user 
    let user = document.getElementById("name").value;
    document.getElementById("resultsname").textContent = `Name: ${user}`;
    // Get the values from the input fields
    let height = parseFloat(document.getElementById("inputheight").value);
    let weight = parseFloat(document.getElementById("inputweight").value);

    // Check if the values are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("results").textContent = "Resutls: Please enter valid height and weight.";
    } else {
        // Calculate BMI
        let bmi = weight / (height * height);

        // Display the result
        document.getElementById("results").textContent = `BMI: ${bmi.toFixed(2)}`;
    }
    //for status
    let bmi = weight / (height * height)

    if (bmi <= 18.4) {
        document.getElementById("status").textContent = `Status: Underweight`
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("status").textContent = `Status: Normal`
    }
    else if (bmi >= 25.0 && bmi <= 39.9) {
        document.getElementById("status").textContent = `Status: Overweight`
    }
    else if (bmi >= 40.0) {
        document.getElementById("status").textContent = `Status: Obese`
    }
    else {
        document.getElementById("status").textContent = `Status: Invalid Input`
    }


}
// reset button
document.getElementById("resetbutton").onclick = function() {
    document.getElementById("status").textContent = `Status: `
    document.getElementById("results").textContent = `BMI: `;
    document.getElementById("resultsname").textContent = `Name: `;
    document.getElementById("name").textContent = ``;
}


