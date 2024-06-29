// script.js

// Simulate an asynchronous operation using a promise

message = "This feature is underdevelopment!";

function clicksomething() {
    alert(message);
}

function updatePlaceholder() {
    const textarea = document.getElementById('message');
    const div = document.getElementById('screen-width-height');
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (textarea) {
        textarea.placeholder = `Width: ${width}px, Height: ${height}px`;
    }
    if (div) {
        div.textContent = `Width: ${width}px, Height: ${height}px`;
    }
}


// Ensure the DOM is fully loaded before calling functions
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    updatePlaceholder();
    window.addEventListener('resize', updatePlaceholder);
});

document.getElementById('resume-button').addEventListener('click', 
    function(){
        const resume = '../../files/Resume_Napoli,MarlouJakeL.pdf';

        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = 'Resume_Napoli,MarlouJakeL.pdf';
        a.href = resume;
        // Append the link to the body and click it
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
});