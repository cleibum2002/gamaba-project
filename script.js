// ========================================
// GAMABA Heritage Website - JavaScript
// BUTTERY SMOOTH SCROLLING (Fast & Responsive)
// ========================================

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const navbarHeight = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // Smooth scroll with perfect speed
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// ========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ========================================
// ARTIST CARDS HOVER EFFECT
// ========================================
const artistCards = document.querySelectorAll('.artist-card');
artistCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// TEAM CARDS HOVER EFFECT
// ========================================
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// BROCHURE BUTTON CLICK HANDLER
// ========================================
const brochureBtn = document.querySelector('.brochure-btn');
if (brochureBtn) {
    brochureBtn.addEventListener('click', function() {
        alert('E-Brochure will be embedded here!\nAdd your PDF or interactive brochure link.');
        // Replace with actual brochure link or modal
    });
}

// ========================================
// FADE-IN ANIMATION ON LOAD
// ========================================
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroText = document.querySelector('.hero-text');
    const heroBtn = document.querySelector('.hero-btn');
    
    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
    }, 400);
    
    setTimeout(() => {
        if (heroText) heroText.style.opacity = '1';
    }, 700);
    
    setTimeout(() => {
        if (heroBtn) heroBtn.style.opacity = '1';
    }, 1000);
});

// ========================================
// CONSOLE BRANDING
// ========================================
console.log('%c🎨 GAMABA Heritage Website', 'color: #C5A572; font-size: 20px; font-weight: bold;');
console.log('%cPreserving Philippine Cultural Heritage', 'color: #800020; font-size: 14px;');
console.log('%cBuilt with ❤️ for education', 'color: #8B4513; font-size: 12px;');