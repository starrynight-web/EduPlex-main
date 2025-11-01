// Enhanced Mobile Navigation Functionality
class MobileNavigation {
  constructor() {
    this.hamburger = document.getElementById("hamburger-menu");
    this.sidebar = document.getElementById("mobile-sidebar");
    this.sidebarClose = document.getElementById("sidebar-close");
    this.sidebarOverlay = document.getElementById("sidebar-overlay");
    this.mobileNavItems = this.sidebar
      ? this.sidebar.querySelectorAll(".mobile-nav-item")
      : [];

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Hamburger click
    if (this.hamburger) {
      this.hamburger.addEventListener("click", () => {
        this.openSidebar();
      });
    }

    // Close sidebar events
    if (this.sidebarClose) {
      this.sidebarClose.addEventListener("click", () => {
        this.closeSidebar();
      });
    }

    if (this.sidebarOverlay) {
      this.sidebarOverlay.addEventListener("click", () => {
        this.closeSidebar();
      });
    }

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.sidebar &&
        this.sidebar.classList.contains("active")
      ) {
        this.closeSidebar();
      }
    });

    // Mobile dropdown toggling
    this.mobileNavItems.forEach((item) => {
      const link = item.querySelector(".mobile-nav-link");
      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          this.toggleDropdown(item);
          this.createRipple(e);
        });

        // Close dropdown when clicking on a link in the dropdown
        const dropdownLinks = item.querySelectorAll(".mobile-dropdown a");
        dropdownLinks.forEach((dropdownLink) => {
          dropdownLink.addEventListener("click", (e) => {
            this.createRipple(e);
            setTimeout(() => {
              this.closeSidebar();
            }, 300);
          });
        });
      }
    });

    // Prevent body scroll when sidebar is open
    this.preventBodyScroll();
  }

  toggleDropdown(item) {
    // Close other dropdowns
    this.mobileNavItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current dropdown
    item.classList.toggle("active");
  }

  createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  openSidebar() {
    if (this.sidebar) {
      this.sidebar.classList.add("active");
      this.sidebarOverlay.classList.add("active");
      this.hamburger.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  closeSidebar() {
    if (this.sidebar) {
      this.sidebar.classList.remove("active");
      this.sidebarOverlay.classList.remove("active");
      this.hamburger.classList.remove("active");
      document.body.style.overflow = "";

      // Close all dropdowns when closing sidebar
      this.mobileNavItems.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }

  preventBodyScroll() {
    if (this.sidebar) {
      this.sidebar.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        { passive: false }
      );
    }
  }
}

// Add ripple effect styles dynamically
const rippleStyles = `
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.mobile-nav-link {
  position: relative;
  overflow: hidden;
}
`;

// Inject ripple styles
const styleSheet = document.createElement("style");
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MobileNavigation();

  // Navigation logo click handler
  const navLogo = document.querySelector(".nav-logo a");
  if (navLogo) {
    navLogo.addEventListener("click", function (e) {
      e.preventDefault();
      // Get the correct index page based on current page
      const currentPath = window.location.pathname;
      let indexPage = "index-swe-batch-45.html";

      if (currentPath.includes("batch-44")) {
        indexPage = "index-swe-batch-44.html";
      } else if (currentPath.includes("batch-45")) {
        indexPage = "index-swe-batch-45.html";
      } else if (currentPath.includes("batch-46")) {
        indexPage = "index-swe-batch-46.html";
      }

      window.location.href = indexPage;
    });
  }

  // Add subtle hover effect to desktop nav items
  const desktopNavItems = document.querySelectorAll(".nav-item > a");
  desktopNavItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });
    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
