/**
 * ============================================================================
 * TUTORIAL 1: UNIT 1 HTML & CSS LAB PROJECT
 * File: js/script.js
 * Description: Minimal vanilla JavaScript strictly for:
 *              1. Mobile navigation menu toggle
 *              2. Lightweight HTML5 Canvas demonstration (2D API)
 *              3. Contact form submit handler (no backend needed)
 *              4. Resume print/download action
 *              5. Lab Viva tab and accordion interactions
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION TOGGLE
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    // Close menu when clicking on any nav link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. HTML5 CANVAS DEMONSTRATION (Unit 1 Requirement)
  // Demonstrates: canvas element, 2D rendering context, drawing paths and circles,
  // animation loop via requestAnimationFrame.
  // --------------------------------------------------------------------------
  const canvas = document.getElementById("decorative-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Small set of 12 decorative animated nodes
    const particles = [];
    const particleCount = 10;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.5,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        color: i % 2 === 0 ? "#38bdf8" : "#818cf8"
      });
    }

    function animateCanvas() {
      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between close particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 40) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.4 - dist / 100})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw individual circular particles
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Update positions with bounce on canvas bounds
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx = -p.dx;
        if (p.y < 0 || p.y > height) p.dy = -p.dy;
      });

      requestAnimationFrame(animateCanvas);
    }

    animateCanvas();
  }

  // --------------------------------------------------------------------------
  // 3. CONTACT FORM SUBMISSION (No Backend Required)
  // Demonstrates handling HTML5 form submission gracefully on the client.
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById("portfolio-contact-form");
  const formSuccessAlert = document.getElementById("form-success-alert");

  if (contactForm && formSuccessAlert) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent actual HTTP page refresh since no backend is used in Unit 1
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const subject = document.getElementById("subject").value.trim();

      // Show formatted success confirmation
      formSuccessAlert.innerHTML = `<strong>Thank you, ${name}!</strong> Your message regarding <em>"${subject}"</em> has been received (Unit 1 Client-Side Demonstration).`;
      formSuccessAlert.classList.add("success");

      // Reset the form fields
      contactForm.reset();

      // Auto-hide alert after 7 seconds
      setTimeout(function () {
        formSuccessAlert.classList.remove("success");
      }, 7000);
    });
  }

  // --------------------------------------------------------------------------
  // 4. RESUME DOWNLOAD / PRINT HANDLER
  // Uses browser window.print() configured with CSS @media print
  // --------------------------------------------------------------------------
  const downloadResumeBtn = document.getElementById("download-resume-btn");
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", function () {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // 5. LAB VIVA TABS & ACCORDION
  // Allows student to toggle between Unit 1 mapping table and Viva Q&A
  // --------------------------------------------------------------------------
  const vivaTabs = document.querySelectorAll(".viva-tab-btn");
  const vivaPanels = document.querySelectorAll(".viva-tab-panel");

  vivaTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");

      vivaTabs.forEach(function (t) { t.classList.remove("active"); });
      vivaPanels.forEach(function (p) { p.classList.remove("active"); });

      this.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  const vivaQuestions = document.querySelectorAll(".viva-qa-question");
  vivaQuestions.forEach(function (button) {
    button.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.display === "block" || answer.style.display === "";
      if (answer.style.display === "none") {
        answer.style.display = "block";
        this.querySelector(".toggle-icon").textContent = "▲";
      } else {
        answer.style.display = "none";
        this.querySelector(".toggle-icon").textContent = "▼";
      }
    });
  });
});
