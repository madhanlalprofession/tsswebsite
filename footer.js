function loadFooter() {
  document.getElementById("footer").innerHTML = `
      <footer class="main-footer">
          <div class="footer-content">
              <div class="footer-section company-info">
                  <img src="logo1.png" alt="TechSukras Logo" class="footer-logo">
                  <p>Empowering businesses through innovative technology solutions and digital transformation.</p>
                  <div class="social-links">
                      <a href="https://linkedin.com/company/techsukras" target="_blank"><i class="fab fa-linkedin"></i></a>
                      <a href="https://twitter.com/techsukras" target="_blank"><i class="fab fa-twitter"></i></a>
                      <a href="https://github.com/techsukras" target="_blank"><i class="fab fa-github"></i></a>
                      <a href="https://instagram.com/techsukras" target="_blank"><i class="fab fa-instagram"></i></a>
                  </div>
              </div>

              <div class="footer-section quick-links">
                  <h4>Quick Links</h4>
                  <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="portfolio.html">Our Work</a></li>
                      <li><a href="team.html">Our Team</a></li>
                      <li><a href="careers.html">Careers</a></li>
                  </ul>
              </div>

              <div class="footer-section services">
                  <h4>Our Services</h4>
                  <ul>
                      <li><a href="custom-software.html">Custom Software Development</a></li>
                      <li><a href="mobile-apps.html">Mobile Apps</a></li>
                      <li><a href="telecom-consulting.html">Telecom Software Consulting</a></li>
                      
                  </ul>
              </div>

              <div class="footer-section contact-info">
                  <h4>Contact Us</h4>
                  <div class="contact-details">
                      <p><i class="fas fa-phone"></i> <a href="tel:+918148290467">+91 81482 90467</a></p>
                      <p><i class="fas fa-envelope"></i> <a href="mailto:reach@techsukras.com">reach@techsukras.com</a></p>
                      <p>
                          <i class="fas fa-map-marker-alt"></i>
                          <a href="https://www.google.com/maps?q=TechSukras+Software+Private+Limited,+Ground+Floor,+Plot+No.+849,+2nd+Main+Road+Cross,+Metro+Grand+City,+Kundrathur,+Chennai+-+600+069,+Tamil+Nadu,+India" target="_blank">
                              TechSukras Software Private Limited, Ground Floor, Plot No. 849, 2nd Main Road Cross, Metro Grand City, Kundrathur, Chennai - 600 069, Tamil Nadu, India
                          </a>
                      </p>
                  </div>
                  <div class="footer-cta">
                      <a href="contact.html" class="cta-button">Get in Touch</a>
                  </div>
              </div>
          </div>

          <div class="footer-bottom">
              <div class="footer-bottom-content">
                  <p>&copy; Copyright TechSukras.com. All Rights Reserved</p>
                  <div class="footer-bottom-links">
                      <a href="#">Privacy Policy</a>
                      <a href="#">Terms of Service</a>
                      <a href="#">Sitemap</a>
                  </div>
              </div>
          </div>
      </footer>
  `;
}

// Call this function after the page loads
document.addEventListener("DOMContentLoaded", loadFooter);
