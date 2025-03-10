// Video Modal Functionality
const videoCards = document.querySelectorAll('.video-thumbnail');
let currentVideo = null;

function createVideoModal(videoUrl) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-video">&times;</span>
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoUrl = card.dataset.video;
        const modal = createVideoModal(videoUrl);
        currentVideo = modal;

        modal.querySelector('.close-video').addEventListener('click', () => {
            modal.remove();
            currentVideo = null;
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                currentVideo = null;
            }
        });
    });
});

// Testimonial Card Animation
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Client Logo Animation
const clientLogos = document.querySelectorAll('.logo-grid img');

clientLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1)';
    });
    
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic star rating
const ratings = document.querySelectorAll('.client-rating');
ratings.forEach(rating => {
    const stars = rating.querySelectorAll('i');
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].style.transform = 'scale(1.2)';
            }
        });
        
        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.style.transform = 'scale(1)');
        });
    });
});