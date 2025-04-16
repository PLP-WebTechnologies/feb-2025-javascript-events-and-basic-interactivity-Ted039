document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Validate username
        if (username.value.trim() === "") {
            document.getElementById("usernameError").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("usernameError").classList.add("hidden");
        }

        // Validate password
        if (password.value.trim() === "") {
            document.getElementById("passwordError").classList.remove("hidden");
            isValid = false;
        } else {
            document.getElementById("passwordError").classList.add("hidden");
        }

        // Display success message
        if (isValid) {
            message.textContent = "Form submitted successfully!";
            message.style.color = "green";
        }
    });

    // Toggle password visibility
    document.getElementById("togglePassword").addEventListener("click", function () {
        password.type = (password.type === "password") ? "text" : "password";
    });
});
