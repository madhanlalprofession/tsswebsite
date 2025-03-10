// Initialize EmailJS
(function() {
    emailjs.init('9jhgtn5-2BPn_oFOa'); // Your EmailJS User ID
})();

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (!contactForm) return; // Stop execution if the form is not found

    // Function to validate input fields
    const validateField = (field, condition) => {
        if (condition) {
            field.classList.remove('error');
            field.classList.add('success');
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            return false;
        }
        return true;
    };

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        let isValid = true;

        // Validate fields
        isValid &= validateField(name, name.value.trim().length >= 2);
        isValid &= validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
        isValid &= validateField(phone, !phone.value || /^[\d\s-+()]{10,}$/.test(phone.value)); // Optional but must be valid
        isValid &= validateField(subject, subject.value.trim().length >= 5);
        isValid &= validateField(message, message.value.trim().length >= 20);

        if (!isValid) return; // Stop if validation fails

        // Disable button and show status message
        submitBtn.disabled = true;
        statusMessage.textContent = 'Sending message...';
        statusMessage.className = 'status-message';

        const templateParams = {
            from_name: name.value,
            from_email: email.value,
            phone: phone.value,
            company: document.getElementById('company')?.value || '',
            subject: subject.value,
            message: message.value
        };

        // Send email using EmailJS
        emailjs.send('service_yrbolhy', 'template_xuz6m56', templateParams)
            .then(() => {
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.className = "status-message success";
                contactForm.reset();

                // Remove validation styles
                document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
                    field.classList.remove('success', 'error');
                });

                // Hide the message after 3 seconds
                setTimeout(() => {
                    statusMessage.textContent = "";
                    statusMessage.className = "status-message";
                }, 3000);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                statusMessage.textContent = "Failed to send message. Please try again.";
                statusMessage.className = "status-message error";

                // Hide the message after 5 seconds
                setTimeout(() => {
                    statusMessage.textContent = "";
                    statusMessage.className = "status-message";
                }, 5000);
            })
            .finally(() => {
                submitBtn.disabled = false;
            });
    });

    // Real-time validation (Remove red/green styles when user types)
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('error', 'success');
        });
    });

    // Initialize AOS (Animation on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // FAQ Accordion Functionality
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(f => {
                f.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
});
