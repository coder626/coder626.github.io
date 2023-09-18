const githubButton = document.getElementById("GithubButton");

// Add a click event listener to the button
githubButton.addEventListener("click", function() {

    // Define the URL you want to navigate to
    const url = "https://github.com/coder626"; // Replace with your desired URL

    // Use window.location to navigate to the URL
    window.location.href = url;
});

const linkedinButton = document.getElementById("LinkedinButton");

// Add a click event listener to the button
linkedinButton.addEventListener("click", function() {
    
    // Define the URL you want to navigate to
    const url = "https://www.linkedin.com/in/kevin-lavelle-a89298115/"; // Replace with your desired URL

    // Use window.location to navigate to the URL
    window.location.href = url;
});

// Get the button element by its ID
const headerButton = document.getElementById("headerButton");

// Add a click event listener to the button
headerButton.addEventListener("click", function() {
    // Define the URL of the page you want to navigate to
    const destinationPage = "resume.html"; // Change to the desired page

    // Use window.location.href to navigate to the URL
    window.location.href = destinationPage;
});
