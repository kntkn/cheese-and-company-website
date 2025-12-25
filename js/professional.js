// Professional JavaScript - Clean & Minimal
// No emojis, no flashy animations, just professional functionality

class ProfessionalSite {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupFormHandling();
        this.setupAccessibility();
        this.setupAnalytics();
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Form handling with validation
    setupFormHandling() {
        const form = document.querySelector('form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });

        // Real-time validation
        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => {
                this.validateField(field);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'この項目は必須です';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = '有効なメールアドレスを入力してください';
            }
        }

        // URL validation
        if (field.type === 'url' && value) {
            try {
                new URL(value);
            } catch {
                isValid = false;
                message = '有効なURLを入力してください（例: https://example.com）';
            }
        }

        this.showValidationMessage(field, message, isValid);
        return isValid;
    }

    showValidationMessage(field, message, isValid) {
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Update field styling
        field.style.borderColor = isValid ? '' : 'var(--color-error)';

        // Add error message if needed
        if (!isValid && message) {
            const errorEl = document.createElement('div');
            errorEl.className = 'error-message';
            errorEl.textContent = message;
            errorEl.style.cssText = `
                color: var(--color-error);
                font-size: var(--text-sm);
                margin-top: var(--space-1);
            `;
            field.parentNode.appendChild(errorEl);
        }
    }

    async handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Validate all fields
        let isFormValid = true;
        form.querySelectorAll('input, textarea').forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showMessage('入力内容をご確認ください', 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '送信中...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual endpoint)
            await this.submitForm(data);
            this.showMessage('お問い合わせありがとうございます。24時間以内にご返信いたします。', 'success');
            form.reset();
        } catch (error) {
            this.showMessage('送信に失敗しました。しばらく待ってから再度お試しください。', 'error');
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    async submitForm(data) {
        // Replace this with your actual form submission logic
        // For now, just simulate a network request
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success for demo
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 1000);
        });
    }

    showMessage(text, type) {
        // Remove existing messages
        document.querySelectorAll('.form-message').forEach(msg => msg.remove());

        // Create message element
        const message = document.createElement('div');
        message.className = `form-message form-message-${type}`;
        message.textContent = text;
        message.style.cssText = `
            padding: var(--space-4);
            border-radius: var(--radius-md);
            margin-bottom: var(--space-4);
            font-weight: 500;
            ${type === 'success' ? 
                'background: var(--color-accent); color: white;' : 
                'background: var(--color-error); color: white;'}
        `;

        // Insert before form
        const form = document.querySelector('form');
        form.parentNode.insertBefore(message, form);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }

    // Accessibility enhancements
    setupAccessibility() {
        // Add skip link for keyboard navigation
        this.addSkipLink();

        // Enhance focus management
        this.setupFocusManagement();

        // Add ARIA labels where needed
        this.enhanceARIA();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'メインコンテンツにスキップ';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
        `;

        // Show on focus
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID if not exists
        const hero = document.querySelector('.hero');
        if (hero && !hero.id) {
            hero.id = 'main-content';
        }
    }

    setupFocusManagement() {
        // Improve focus visibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });

        // Add keyboard navigation styles
        const style = document.createElement('style');
        style.textContent = `
            .keyboard-nav *:focus {
                outline: 3px solid var(--color-primary) !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }

    enhanceARIA() {
        // Add ARIA labels to form fields
        document.querySelectorAll('input, textarea').forEach(field => {
            const label = field.parentNode.querySelector('label');
            if (label && !field.getAttribute('aria-label')) {
                field.setAttribute('aria-label', label.textContent);
            }
        });

        // Add ARIA expanded to FAQ items
        document.querySelectorAll('details').forEach(details => {
            const summary = details.querySelector('summary');
            if (summary) {
                summary.setAttribute('aria-expanded', details.open);
                details.addEventListener('toggle', () => {
                    summary.setAttribute('aria-expanded', details.open);
                });
            }
        });
    }

    // Simple analytics (replace with your preferred analytics)
    setupAnalytics() {
        // Track CTA clicks
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('CTA Click', {
                    text: btn.textContent.trim(),
                    location: btn.closest('section')?.className || 'unknown'
                });
            });
        });

        // Track form submissions
        document.querySelector('form')?.addEventListener('submit', () => {
            this.trackEvent('Form Submission', {
                form: 'contact'
            });
        });

        // Track FAQ interactions
        document.querySelectorAll('details').forEach(details => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    const question = details.querySelector('summary').textContent;
                    this.trackEvent('FAQ Opened', {
                        question: question.substring(0, 50)
                    });
                }
            });
        });
    }

    trackEvent(eventName, data) {
        // Replace with your analytics implementation
        console.log('Analytics Event:', eventName, data);
        
        // Example: Google Analytics 4
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName.replace(' ', '_').toLowerCase(), data);
        // }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalSite();
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Site loaded in ${loadTime}ms`);
        }, 0);
    });
}