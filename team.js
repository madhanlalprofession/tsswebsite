// Department Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const teamGrids = document.querySelectorAll('.team-grid');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and grids
        tabButtons.forEach(btn => btn.classList.remove('active'));
        teamGrids.forEach(grid => grid.classList.remove('active'));
        
        // Add active class to clicked button and corresponding grid
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Leader Card Hover Effects
const leaderCards = document.querySelectorAll('.leader-card');

leaderCards.forEach(card => {
    const socialOverlay = card.querySelector('.social-overlay');
    
    card.addEventListener('mouseenter', () => {
        socialOverlay.style.bottom = '0';
    });
    
    card.addEventListener('mouseleave', () => {
        socialOverlay.style.bottom = '-50px';
    });
});

// Team Card Animation
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const teamGrids = document.querySelectorAll('.team-grid');

  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Remove active class from all buttons and grids
          tabBtns.forEach(b => b.classList.remove('active'));
          teamGrids.forEach(grid => grid.classList.remove('active'));

          // Add active class to clicked button and corresponding grid
          btn.classList.add('active');
          document.getElementById(btn.dataset.tab).classList.add('active');
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS with optimized settings
  AOS.init({
      duration: 800,
      once: true, // Animation occurs only once
      offset: 100,
      delay: 0,
      throttleDelay: 99,
      disable: window.innerWidth < 768 // Disable on mobile for better performance
  });

  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const teamGrids = document.querySelectorAll('.team-grid');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const tab = button.dataset.tab;
          
          // Remove active class from all buttons and grids
          tabButtons.forEach(btn => btn.classList.remove('active'));
          teamGrids.forEach(grid => grid.classList.remove('active'));
          
          // Add active class to clicked button and corresponding grid
          button.classList.add('active');
          document.getElementById(tab).classList.add('active');
      });
  });
});
