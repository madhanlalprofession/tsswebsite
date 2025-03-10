function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
      <nav class="navbar">
        <div class="nav-brand">
          <img src="logo1.png" alt="TechSukras Logo" class="logo">
          <span>TechSukras</span>
        </div>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" class="nav-item">Home</a></li>
          <li><a href="about.html" class="nav-item">About</a></li>
          <li><a href="portfolio.html" class="nav-item">Portfolio</a></li>
          <li><a href="team.html" class="nav-item">Team</a></li>
          <li><a href="feedback.html" class="nav-item">Testimonials</a></li>
          <li><a href="contact.html" class="nav-item">Contact</a></li>
        </ul>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    `;
  
    // Enhanced menu functionality
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar")) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  
    // Update active page
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-item").forEach(link => {
      if (link.pathname === currentPath) {
        link.classList.add("active");
      }
    });
  
    // Smooth scroll for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadNavbar);