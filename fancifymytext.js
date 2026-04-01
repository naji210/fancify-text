// Function for the "Bigger!" button
function biggerText() {

    alert("Hello, world!");
    
    // Change font size to 24pt
    document.getElementById("userInput").style.fontSize = "24pt";
}

// Function for the radio buttons
function changeStyle() {
    let textArea = document.getElementById("userInput");
    let fancyBtn = document.getElementById("fancy");

    // Optional: Alert to signal the change occurred
    // alert("Style changed!");

    if (fancyBtn.checked) {
        // Apply Fancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Revert to BoringBetty styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function for the "Moo" button
function mooify() {
    let textArea = document.getElementById("userInput");
    let text = textArea.value;

    // Uppercase the entire text
    text = text.toUpperCase();

    // Split text by periods and rejoin with the suffix
    let parts = text.split(".");
    textArea.value = parts.join("-MOO.");
}