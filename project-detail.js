document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Gallery image interaction
    const galleryMain = document.querySelector('.gallery-main img');
    const galleryGridImages = document.querySelectorAll('.gallery-grid img');

    galleryGridImages.forEach(img => {
        img.addEventListener('click', function() {
            const tempSrc = galleryMain.src;
            const tempAlt = galleryMain.alt;
            
            galleryMain.src = this.src;
            galleryMain.alt = this.alt;
            
            this.src = tempSrc;
            this.alt = tempAlt;

            galleryMain.classList.add('image-switch');
            setTimeout(() => {
                galleryMain.classList.remove('image-switch');
            }, 300);
        });
    });

    // Animate statistics when in view
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                let count = 0;
                const speed = 2000 / target;

                const updateCount = () => {
                    if (count < target) {
                        count++;
                        counter.textContent = count + '%';
                        setTimeout(updateCount, speed);
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });

    document.querySelectorAll('.result-card h3').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Feature box hover effects
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Tech stack items animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Testimonial fade in
    const testimonial = document.querySelector('.testimonial-content');
    if (testimonial) {
        testimonial.style.opacity = '0';
        setTimeout(() => {
            testimonial.style.transition = 'opacity 1s ease-in-out';
            testimonial.style.opacity = '1';
        }, 500);
    }
});