// Initialize EmailJS with your user ID
    emailjs.init("onlexway.legal@gmail.com"); // Replace with your EmailJS user ID

    // Handle the form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        var formData = new FormData(event.target);

        // Send the email using EmailJS service
        emailjs.sendForm("service_5lr36gs", "template_b5q14h3", formData)
            .then(function(response) {
                alert("Your message has been sent successfully!");
            }, function(error) {
                alert("Something went wrong. Please try again later.");
            });
    });