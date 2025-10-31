// Shared behavior for About and Contact pages
document.addEventListener("DOMContentLoaded", function () {
  // Contact form functionality
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.getElementById("successMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple form validation
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (name && email && message) {
        if (name.value && email.value && message.value) {
          // Create success message if it doesn't exist
          if (!successMessage) {
            const successDiv = document.createElement("div");
            successDiv.className = "contact-success";
            successDiv.innerHTML =
              '<i class="fas fa-check-circle" style="margin-right: 8px;"></i>Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
            contactForm.parentNode.appendChild(successDiv);
            successDiv.style.display = "block";
          } else {
            successMessage.style.display = "block";
          }

          // Reset form
          contactForm.reset();

          // Scroll to success message
          const messageElement =
            successMessage || document.querySelector(".contact-success");
          if (messageElement) {
            messageElement.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
              messageElement.style.display = "none";
            }, 5000);
          }
        }
      }
    });
  }

  // Ensure nav logo click still routes to home if main.js isn't loaded for some reason
  const navLogo = document.querySelector(".nav-logo a");
  if (navLogo) {
    navLogo.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault();
        window.location.href = "index.html";
      }
    });
  }
});
