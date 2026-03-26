/**
 * BRIGHTSMILE SHOWCASE WEBSITE - Interactive Behavior
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });

    // 2. Sticky Navbar Effect on Scroll
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Smooth Anchor Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only handle internal anchor links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. WhatsApp Button Micro-animation on Hover
    const waBtn = document.querySelector('.whatsapp-float');
    if (waBtn) {
        waBtn.addEventListener('mouseenter', () => {
            waBtn.style.transform = 'scale(1.05) rotate(-2deg)';
        });
        waBtn.addEventListener('mouseleave', () => {
            waBtn.style.transform = 'scale(1) rotate(0)';
        });
    }

    // 5. Mobile Menu Logic
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');

    window.toggleMenu = () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // 6. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // 7. Dark Mode Logic
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const body = document.documentElement;
    const isDark = localStorage.getItem('site-theme') === 'dark';

    if (isDark) {
        body.setAttribute('data-theme', 'dark');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('site-theme', 'light');
            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('site-theme', 'dark');
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

});
