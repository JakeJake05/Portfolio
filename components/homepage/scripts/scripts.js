// script.js

// Simulate an asynchronous operation using a promise
document.getElementById('hamburger-icon').addEventListener('click',
    function(){
        const navmenu = document.getElementById('nav-menu');
        navmenu.classList.toggle('active');
});

function clicksomething() {
    message = "This feature is underdevelopment!";
    alert(message);
}


function updatePlaceholder() {
    const textarea = document.getElementById('message');
    const p = document.getElementById('screen-width-height1');
    const h3 = document.getElementById('screen-width-height2');
    const width = window.innerWidth;
    const height = window.innerHeight;
    /*if (textarea) {
        textarea.placeholder = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
    }*/
    if (p) {

        p.textContent = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
    }
    if(h3){
        h3.textContent = `Current Screen Size: Width: ${width}px, Height: ${height}px`;
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

document.getElementById('download-resume-button').addEventListener('click', 
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





// Add event listener to all navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Hide the navigation menu
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');
    });
});

//scroll nav big screen
document.getElementById('homepage').addEventListener('click', 
    function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });   
});
document.getElementById('contacts').addEventListener('click', 
    function(){
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('about').addEventListener('click', 
    function(){
        document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('resume').addEventListener('click', 
    function(){
        document.getElementById('resume-area').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('project-link').addEventListener('click', 
    function(){
        document.getElementById('project-view').scrollIntoView({behavior: 'smooth'});    
});

document.getElementById('skill-button').addEventListener('click', 
    function(){
        document.getElementById('skill-view-1').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('experience-button').addEventListener('click', 
    function(){
        document.getElementById('experience-view').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('education-button').addEventListener('click', 
    function(){
        document.getElementById('education-view').scrollIntoView({behavior: 'smooth'});    
});



//scroll nav small screen
document.getElementById('nav-name').addEventListener('click', 
    function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });   
});
document.getElementById('to-home').addEventListener('click', 
    function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });      
});
document.getElementById('to-about').addEventListener('click', 
    function(){
        document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('to-resume').addEventListener('click', 
    function(){
        document.getElementById('view-resume').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('to-contact').addEventListener('click', 
    function(){
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});    
});
document.getElementById('to-skill').addEventListener('click', 
    function(){
        document.getElementById('skill-view').scrollIntoView({behavior: 'smooth'});       
});

document.getElementById('to-projects').addEventListener('click', 
    function(){
        document.getElementById('project-view').scrollIntoView({behavior: 'smooth'});       
});

document.getElementById('to-experience').addEventListener('click', 
    function(){
        document.getElementById('experience-view').scrollIntoView({behavior: 'smooth'});       
});
document.getElementById('to-education').addEventListener('click', 
    function(){
        document.getElementById('education-view').scrollIntoView({behavior: 'smooth'});       
});

