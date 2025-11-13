/* ----------------------------------------------------------
   SUPER ULTRA BASIC CONTACT FORM
----------------------------------------------------------- */
function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        alert("Please type your name.");
        return;
    }

    if (email === "") {
        alert("Please type your email.");
        return;
    }

    if (subject === "") {
        alert("Please type a subject.");
        return;
    }

    if (message === "") {
        alert("Please write your message.");
        return;
    }

    alert("Your message has been sent!");

    // Clear the fields manually
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}


/* ----------------------------------------------------------
   SUPER ULTRA BASIC BMI CALCULATOR
----------------------------------------------------------- */
function calculateBMI() {
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var box = document.getElementById("bmiResult");

    if (w === "" || h === "") {
        box.innerHTML = "Please enter weight and height.";
        box.style.display = "block";
        return;
    }

    var weight = parseFloat(w);
    var height = parseFloat(h) / 100;

    var bmi = weight / (height * height);

    var result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    }

    if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";
    }

    if (bmi >= 25 && bmi < 30) {
        result = "Overweight";
    }

    if (bmi >= 30) {
        result = "Obese";
    }

    box.innerHTML = "BMI: " + bmi.toFixed(1) + " (" + result + ")";
    box.style.display = "block";
}


/* ----------------------------------------------------------
   SUPER ULTRA BASIC WELLNESS TIP (No arrays)
   Shows 1 fixed tip only
----------------------------------------------------------- */
function showTip() {
    var box = document.getElementById("tipBox");
    box.innerHTML = "Take a deep breath and drink some water.";
}
