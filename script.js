document.addEventListener("DOMContentLoaded", function() {
    const feedbackButton = document.getElementById("feedbackButton");
    const feedbackForm = document.getElementById("feedbackForm");
    const closeButton = document.getElementById("closeButton");

    feedbackButton.addEventListener("click", function() {
        feedbackForm.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        feedbackForm.style.display = "none";
    });
});

