// ==========================================
// 1. Dark Mode Toggle (JavaScript Concept: Local Storage & DOM Manipulation)
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================
// 2. Mobile Navigation Toggle (JavaScript Concept: Event Listeners & Class Manipulation)
// ==========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================
// 3. Form Validation (JavaScript Concept: Form Validation & Error Handling)
// ==========================================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const formMessage = document.getElementById('formMessage');

// Validation functions
function isValidName(name) {
    return name.trim().length >= 2;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMessage(message) {
    return message.trim().length >= 10;
}

function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
}

function clearError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = '';
}

// Real-time validation
nameInput.addEventListener('blur', () => {
    if (!isValidName(nameInput.value)) {
        showError(nameInput, document.getElementById('nameError'), 'Name must be at least 2 characters');
    } else {
        clearError(nameInput, document.getElementById('nameError'));
    }
});

emailInput.addEventListener('blur', () => {
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, document.getElementById('emailError'), 'Please enter a valid email');
    } else {
        clearError(emailInput, document.getElementById('emailError'));
    }
});

messageInput.addEventListener('blur', () => {
    if (!isValidMessage(messageInput.value)) {
        showError(messageInput, document.getElementById('messageError'), 'Message must be at least 10 characters');
    } else {
        clearError(messageInput, document.getElementById('messageError'));
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous messages
    formMessage.className = '';
    formMessage.textContent = '';
    
    // Validate all fields
    let isValid = true;
    
    if (!isValidName(nameInput.value)) {
        showError(nameInput, document.getElementById('nameError'), 'Name must be at least 2 characters');
        isValid = false;
    } else {
        clearError(nameInput, document.getElementById('nameError'));
    }
    
    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, document.getElementById('emailError'), 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(emailInput, document.getElementById('emailError'));
    }
    
    if (!isValidMessage(messageInput.value)) {
        showError(messageInput, document.getElementById('messageError'), 'Message must be at least 10 characters');
        isValid = false;
    } else {
        clearError(messageInput, document.getElementById('messageError'));
    }
    
    if (isValid) {
        // Simulate form submission
        formMessage.classList.add('success');
        formMessage.textContent = '✓ Message sent successfully! Thank you for reaching out.';
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }
});

// ==========================================
// 4. Smooth Scroll Navigation (Already handled by HTML scroll-behavior)
// ==========================================

// ==========================================
// 5. Initialize on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Animate elements on scroll
    observeElements();
});

// ==========================================
// 6. Intersection Observer for Scroll Animations (JavaScript Concept: Advanced DOM API)
// ==========================================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe project cards and skill items
    document.querySelectorAll('.project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


}