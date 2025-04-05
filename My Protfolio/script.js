document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you can add code to handle form submission
    // For now, we'll just show an alert
    alert('Thank you for your message! This is a demo form.');
    
    // Clear form
    this.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});