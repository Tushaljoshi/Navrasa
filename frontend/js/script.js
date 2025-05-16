// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Service Dropdown Functionality
    const dropdowns = document.querySelectorAll('.service-dropdown');
    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.service-dropdown-header');
        header.addEventListener('click', () => {
            dropdown.classList.toggle('active');
            const icon = header.querySelector('.dropdown-icon');
            icon.textContent = dropdown.classList.contains('active') ? '▲' : '▼';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle if href is not just "#"
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-dropdown-header');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }

    // Image hover effects
    document.querySelectorAll('.project-img, .about-img, .member-img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1) rotate(2deg)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Form input animations
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Industry card animations
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Why choose us card animations
    const whyChooseCards = document.querySelectorAll('.why-choose-card');
    whyChooseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let currentSlide = 0;
        const slides = testimonialSlider.querySelectorAll('.testimonial');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 5000);
    }
    /*service dropdown*/
    // Service dropdowns (for services page)
    document.querySelectorAll('.service-dropdown-header').forEach(header => {
        header.addEventListener('click', () => {
            const dropdown = header.parentElement;
            dropdown.classList.toggle('active');
            // Toggle icon
            const icon = header.querySelector('.dropdown-icon');
            if (icon) {
                icon.textContent = dropdown.classList.contains('active') ? '▲' : '▼';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            if (targetId) {
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Form confirmation (for contact page)
    function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}
});

// Modal functionality
function openQuoteForm() {
    const modal = document.getElementById('quoteModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openConsultationForm() {
    const modal = document.getElementById('consultationModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => closeModal(modal.id));
    }
});
/*
// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        // Remove existing error messages
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Reset error state
        input.classList.remove('error');

        // Validate required fields
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            // Validate specific field types
            switch (input.type) {
                case 'email':
                    if (!isValidEmail(input.value.trim())) {
                        isValid = false;
                        input.classList.add('error');
                        showError(input, 'Please enter a valid email address');
                    }
                    break;
                case 'tel':
                    if (!isValidPhone(input.value.trim())) {
                        isValid = false;
                        input.classList.add('error');
                        showError(input, 'Please enter a valid phone number');
                    }
                    break;
                case 'text':
                    if (input.id === 'consultName' && !isValidName(input.value.trim())) {
                        isValid = false;
                        input.classList.add('error');
                        showError(input, 'Please enter a valid name');
                    }
                    break;
            }
        }

        // Validate select fields
        if (input.tagName === 'SELECT' && input.value === '') {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Please select a service');
        }
    });

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Allows international phone numbers with optional + prefix
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    return phoneRegex.test(phone);
}

function isValidName(name) {
    // Allows letters, spaces, and basic punctuation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    return nameRegex.test(name);
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}
*/
/*
// Consultation form handling
const consultationForm = document.getElementById('consultationForm');
if (consultationForm) {
    consultationForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const submitBtn = this.querySelector('.submit-btn');

        // Validate form
        if (!validateForm('consultationForm')) {
            return;
        }

        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Booking...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            const modalContent = this.closest('.modal-content');
            const formContainer = this.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'form-confirmation';
            successMessage.innerHTML = `
                <p>Thank you for booking a consultation! We'll contact you within 24 hours to schedule your session.</p>
            `;

            formContainer.appendChild(successMessage);
            this.style.display = 'none';

            // Reset form and button after 5 seconds
            setTimeout(() => {
                this.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Book Consultation';
                this.style.display = 'block';
                successMessage.remove();
            }, 5000);

        } catch (error) {
            console.error('Error submitting consultation form:', error);
            alert('There was an error booking your consultation. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Book Consultation';
        }
    });

    // Add real-time validation
    const inputs = consultationForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateForm('consultationForm');
        });
    });
}
*/
/*
// Quote form handling
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const submitBtn = this.querySelector('.submit-btn');

        // Validate form
        if (!validateForm('quoteForm')) {
            return;
        }

        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            const modalContent = this.closest('.modal-content');
            const formContainer = this.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'form-confirmation';
            successMessage.innerHTML = `
                <p>Thank you for your quote request! We'll review your requirements and get back to you within 24 hours.</p>
            `;

            formContainer.appendChild(successMessage);
            this.style.display = 'none';

            // Reset form and button after 5 seconds
            setTimeout(() => {
                this.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Request';
                this.style.display = 'block';
                successMessage.remove();
            }, 5000);

        } catch (error) {
            console.error('Error submitting quote form:', error);
            alert('There was an error submitting your quote request. Please try again.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Request';
        }
    });
}*/
// Initialize AOS (Animate On Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

/*CASE STUDY*/
// ===============================
// BACK TO TOP FUNCTIONALITY
// ===============================
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===============================
// TOGGLE "READ MORE" CONTENT
// ===============================
function toggleContent(cardId) {
  const fullContent = document.querySelector(`#${cardId} .full-content`);
  const readMoreButton = document.querySelector(`#${cardId} .read-more`);

  if (!fullContent || !readMoreButton) {
    console.warn(`Missing .full-content or .read-more in #${cardId}`);
    return;
  }

  const isVisible = fullContent.style.display === "block";
  fullContent.style.display = isVisible ? "none" : "block";
  readMoreButton.innerText = isVisible ? "Read More" : "Read Less";
}


/* Service*/
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tech-tab');
    const grids = document.querySelectorAll('.tech-grid');

    function showGrid(tab) {
        if (!tab) return;
        tabs.forEach(t => t.classList.remove('active'));
        grids.forEach(g => g.style.display = 'none');

        tab.classList.add('active');
        const gridId = 'tech-' + tab.getAttribute('data-tab');
        const grid = document.getElementById(gridId);
        if (grid) grid.style.display = '';
    }

    // ✅ Only run if at least one tab exists
    if (tabs.length > 0) {
        showGrid(tabs[0]);

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                showGrid(tab);
            });
        });
    }
});

/*blog*/
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".learn-more-btn");
    let currentlyExpanded = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const cardId = button.getAttribute("data-target");
            const targetCard = document.getElementById(cardId);

            // Collapse previously expanded card
            if (currentlyExpanded && currentlyExpanded !== targetCard) {
                currentlyExpanded.classList.remove("expanded");
                const previousButton = currentlyExpanded.querySelector(".learn-more-btn");
                if (previousButton) previousButton.classList.remove("hidden");
            }

            // Expand new card
            targetCard.classList.add("expanded");
            button.classList.add("hidden");

            // Update tracker
            currentlyExpanded = targetCard;
        });
    });
});

/*request to quote*/
function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  //* Optional: Close modal on click outside
  window.onclick = function(event) {
    const modal = document.getElementById('consultationModal');
    if (event.target === modal) {
      closeModal('consultationModal');
    }
  }

function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
