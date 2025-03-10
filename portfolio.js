// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Modal Functionality
const modal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('.modal-title');
const modalImage = document.querySelector('.modal-image img');
const modalDescription = document.querySelector('.project-description');
const modalClient = document.querySelector('.project-client');
const modalTechnologies = document.querySelector('.project-technologies');
const modalYear = document.querySelector('.project-year');
const closeModal = document.querySelector('.close-modal');

// Project Data
const projectData = {
    'project1': {
        title: 'E-commerce Platform',
        image: 'project1.jpg',
        description: 'A full-featured e-commerce platform with advanced product management, secure payment processing, and real-time inventory tracking.',
        client: 'RetailTech Solutions',
        technologies: 'React, Node.js, MongoDB, Stripe',
        year: '2023'
    },
    // Add more project data as needed
};

// Open Modal for specific links
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = button.closest('.portfolio-item')?.getAttribute('data-project');
        
        // If projectId exists in projectData, open the modal
        if (projectData[projectId]) {
            e.preventDefault(); // Prevents navigation only when opening modal
            
            const project = projectData[projectId];
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalDescription.textContent = project.description;
            modalClient.textContent = project.client;
            modalTechnologies.textContent = project.technologies;
            modalYear.textContent = project.year;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        // If projectId is not in projectData, allow normal navigation
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Portfolio Item Hover Animation
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.bottom = '0';
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.bottom = '-100%';
    });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
