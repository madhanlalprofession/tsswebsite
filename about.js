// Timeline scroll animation enhancement
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = item.querySelector('.timeline-content').offsetLeft < window.innerWidth / 2 
        ? 'translateX(-50px)' 
        : 'translateX(50px)';
    observer.observe(item);
});

// Value cards hover effect enhancement
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Smooth reveal for mission section
const missionContent = document.querySelector('.mission-content');
const missionImage = document.querySelector('.mission-image');

window.addEventListener('scroll', () => {
    const missionSection = document.querySelector('.mission-section');
    const sectionTop = missionSection.getBoundingClientRect().top;
    
    if (sectionTop < window.innerHeight * 0.75) {
        missionContent.style.opacity = 1;
        missionContent.style.transform = 'translateX(0)';
        missionImage.style.opacity = 1;
        missionImage.style.transform = 'translateX(0)';
    }
});