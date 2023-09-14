const button = document.getElementById("GithubButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
    
    // Define the URL you want to navigate to
    const url = "https://github.com/coder626"; // Replace with your desired URL

    // Use window.location to navigate to the URL
    window.location.href = url;
});