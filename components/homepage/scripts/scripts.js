// script.js

// Simulate an asynchronous operation using a promise


function clicksomething() {
    message = "This feature is underdevelopment!";
    alert(message);
}


function updatePlaceholder() {
    const textarea = document.getElementById('message');
    const p = document.getElementById('screen-width-height1');
    const p2 = document.getElementById('screen-width-height2');
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (textarea) {
        textarea.placeholder = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
    }
    if (p) {
        p.textContent = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
    }
    if(p2){
        p.textContent = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
    }
}


// Ensure the DOM is fully loaded before calling functions
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    updatePlaceholder();
    window.addEventListener('resize', updatePlaceholder);
});


document.getElementById('submit-button').addEventListener('click', 
    function(){
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();


        if (name === '' || email === '' || subject === '' || message === '') {
            return false;
        }
        else{
            alert('Submit');
            return true;
        }
});

//Download Button Function
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

const buttons = document.getElementsByClassName('index-button');
for(let button of buttons){
    button.addEventListener('click', clicksomething);
}
