document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dept = document.getElementById("department").value;
    let feedback = document.getElementById("feedback").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");

    if (name === "") return message.innerText = "Name required";

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) return message.innerText = "Invalid email";

    if (!/^\d{10}$/.test(mobile)) return message.innerText = "Invalid mobile";

    if (!gender) return message.innerText = "Select gender";

    if (dept === "") return message.innerText = "Select department";

    if (feedback.split(" ").length < 10) return message.innerText = "Feedback must be at least 10 words";

    message.innerText = "Form submitted successfully!";
});