// Initialize AOS
AOS.init();

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.position-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal functionality
const modal = document.querySelector('.application-modal');
const closeBtn = document.querySelector('.close-modal');

// Show modal when Apply Now is clicked
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        const position = this.dataset.position;
        const positionTitle = this.closest('.position-card').querySelector('h3').textContent;
        document.querySelector('.position-title').textContent = positionTitle;
        modal.style.display = 'block';
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// File size validation
document.getElementById('resume').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes

    if (file.size > maxSize) {
        alert('File size must be less than 2MB');
        this.value = ''; // Clear the file input
    }
});

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const resumeFile = formData.get('resume');

    // Validate file size before submission
    if (resumeFile.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
    }

    // Convert resume file to base64
    const reader = new FileReader();
    reader.readAsDataURL(resumeFile);

    reader.onload = async function() {
        try {
            const response = await emailjs.send(
                "service_yrbolhy", 
                "template_xuz6m56",
                {
                    from_name: formData.get('fullName'),
                    from_email: formData.get('email'),
                    phone: formData.get('phone'),
                    portfolio: formData.get('portfolio'),
                    cover_letter: formData.get('coverLetter'),
                    position: document.querySelector('.position-title').textContent,
                    resume_file: reader.result
                }
            );

            if (response.status === 200) {
                alert('Application submitted successfully!');
                modal.style.display = 'none';
                document.getElementById('applicationForm').reset();
            } else {
                throw new Error('Failed to submit application');
            }
        } catch (error) {
            alert('Error submitting application. Please try again.');
            console.error('Error:', error);
        }
    };

    reader.onerror = function() {
        alert('Error reading file. Please try again.');
    };
});