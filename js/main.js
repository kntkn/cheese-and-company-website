// Cheese & Company LP運用SaaS - Enhanced JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize core functionality
    initSmoothScrolling();
    initScrollAnimations();
    initNavigationEffects();
    initInteractiveElements();
    initFormEnhancements();
    initPerformanceOptimizations();
    
    // Editorial magazine effects
    initMagazineEffects();
    initHeroCardAnimation();
    initCounterAnimations();
    
    // FAQ functionality
    initFAQAccordion();
});

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Account for fixed nav
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = answer.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherQuestion.classList.remove('active');
                otherAnswer.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Observe elements with scroll-fade class
    document.querySelectorAll('.scroll-fade').forEach(el => {
        observer.observe(el);
    });
    
    // Also add scroll-fade class to elements that should animate
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .scale-in');
    animatedElements.forEach(el => {
        el.classList.add('scroll-fade');
        observer.observe(el);
    });
}

// Enhanced Navigation Effects
function initNavigationEffects() {
    const nav = document.querySelector('.nav');
    let lastScrollTop = 0;
    let ticking = false;
    
    function updateNavigation() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Enhanced background effect
        if (scrollTop > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Smooth hide/show on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavigation);
            ticking = true;
        }
    }, { passive: true });
}

// Interactive Elements
function initInteractiveElements() {
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Portfolio item interactions
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Pricing card enhancements
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-6px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Magazine-style Editorial Effects
function initMagazineEffects() {
    // Text reveal animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const words = heroTitle.innerHTML.split(' ');
        heroTitle.innerHTML = words.map((word, index) => 
            `<span style="animation-delay: ${index * 0.1}s">${word}</span>`
        ).join(' ');
    }
    
    // Parallax effect for hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            hero.style.transform = `translateY(${rate}px)`;
        }, { passive: true });
    }
    
    // Magnetic cursor effect for interactive elements
    const magneticElements = document.querySelectorAll('.btn, .nav-link, .portfolio-item');
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Hero Card Animation
function initHeroCardAnimation() {
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        // Floating animation
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            const y = Math.sin(progress * 0.001) * 5;
            const rotation = Math.sin(progress * 0.0008) * 2;
            
            heroCard.style.transform = `translateY(${y}px) rotate(${2 + rotation}deg)`;
            
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }
}

// Counter Animations for Metrics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.metric-value');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, '')) || 100;
                const prefix = counter.textContent.match(/[+%]/g) || [];
                const suffix = counter.textContent.match(/[%]/g) ? '%' : '';
                
                animateCounter(counter, 0, target, 2000, prefix.join(''), suffix);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, start, end, duration, prefix = '', suffix = '') {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        element.textContent = `${prefix}${current}${suffix}`;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Form Enhancements
function initFormEnhancements() {
    // Email link click tracking
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track email click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    'event_category': 'Contact',
                    'event_label': 'Email Link'
                });
            }
        });
    });
    
    // Phone link click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', {
                    'event_category': 'Contact',
                    'event_label': 'Phone Link'
                });
            }
        });
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images if needed
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize events here if needed
            handleResize();
        }, 250);
    });
}

function handleResize() {
    // Recalculate any layout-dependent features
    // This function is called on debounced resize
}

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Animation helpers
function animateOnScroll(element, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(element);
}

// Error handling
window.addEventListener('error', function(e) {
    console.log('Script error:', e.error);
    // Could send to analytics in production
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Register service worker when ready
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Function for pricing button scroll functionality
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}