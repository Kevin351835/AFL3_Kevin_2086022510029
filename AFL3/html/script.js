// ========== WELCOME ALERT ==========
window.addEventListener('load', function() {
    if (!sessionStorage.getItem('welcomeAlert')) {
        setTimeout(function() {
            alert('🎉 Selamat Datang di Portfolio Saya!\n\nSilakan jelajahi halaman untuk melihat project dan skills yang saya miliki.');
            sessionStorage.setItem('welcomeAlert', 'true');
        }, 1000);
    }
});

// ========== SET ACTIVE NAV LINK ==========
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

// ========== TYPING EFFECT ==========
var typedText = document.getElementById('typed-text');
if (typedText) {
    var words = ['Web Developer', 'UI/UX Designer', 'Programmer', 'Tech Enthusiast'];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    
    function typeEffect() {
        var currentWord = words[wordIndex];
        var currentChar = currentWord.substring(0, charIndex);
        
        typedText.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1500);
        }
    }
    
    typeEffect();
}