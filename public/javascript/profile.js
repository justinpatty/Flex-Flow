
function uploadProfilePicture() {
    const profilePictureInput = document.getElementById("profile-picture");
    profilePictureInput.click();
}

function updateProfilePicture(input) {
    const selectedProfilePicture = document.getElementById("selected-profile-picture");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            selectedProfilePicture.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const bmiResult = document.getElementById("bmi-result");

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!isNaN(height) && !isNaN(weight)) {
        const bmi = (weight / (height * height)) * 703; // Calculate BMI using the Imperial system formula
        bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        bmiResult.textContent = "Please enter valid height and weight.";
    }
}
