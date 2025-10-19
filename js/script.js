document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


document.getElementById('topLogo').addEventListener('click', function(e) {
    e.preventDefault();  // 기본 링크 동작 방지
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
