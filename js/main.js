/**
 * Main JavaScript Controller for Shushil Bastola Portfolio
 * Handles theme toggling, sticky navigation, mobile drawer,
 * portfolio filtering, interactive modals, video playback, and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStickyNavbar();
  initMobileDrawer();
  initPortfolio();
  initModals();
  initFaqAccordion();
  initContactForm();
  initScrollAnimations();
  initBackToTop();
});

/* ---------- 1. Theme Toggle (Dark / Light) ---------- */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('sb_portfolio_theme');
  
  // Default is dark mode
  if (storedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcons('light');
  } else {
    document.body.classList.remove('light-mode');
    updateThemeIcons('dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      const currentTheme = isLight ? 'light' : 'dark';
      localStorage.setItem('sb_portfolio_theme', currentTheme);
      updateThemeIcons(currentTheme);
      showToast(`Switched to ${currentTheme} mode`);
    });
  });

  function updateThemeIcons(theme) {
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'fas fa-moon';
          btn.setAttribute('aria-label', 'Switch to dark mode');
        } else {
          icon.className = 'fas fa-sun';
          btn.setAttribute('aria-label', 'Switch to light mode');
        }
      }
    });
  }
}

/* ---------- 2. Sticky Navbar Refinement ---------- */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ---------- 3. Mobile Navigation Drawer ---------- */
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileDrawer || !drawerOverlay) return;

  function toggleDrawer(open) {
    hamburgerBtn.classList.toggle('active', open);
    mobileDrawer.classList.toggle('active', open);
    drawerOverlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.contains('active');
    toggleDrawer(!isOpen);
  });

  drawerOverlay.addEventListener('click', () => toggleDrawer(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* ---------- 4. Portfolio Grid & Category Filtering ---------- */
function initPortfolio() {
  const gridContainer = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // If we have portfolio data and a grid element
  if (gridContainer && typeof portfolioProjects !== 'undefined') {
    renderProjects(portfolioProjects, gridContainer);

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');
        let filtered = portfolioProjects;

        if (category !== 'all') {
          filtered = portfolioProjects.filter(p => p.category === category);
        }

        renderProjects(filtered, gridContainer);
      });
    });
  }
}

function renderProjects(projects, container) {
  container.innerHTML = '';

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fas fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent-primary);"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'portfolio-card fade-up visible';
    card.setAttribute('data-id', project.id);

    const isReel = project.category === 'reels';
    const mediaAspectClass = isReel ? 'reel-aspect' : '';
    const hasVideo = !!project.videoUrl;

    const toolsHtml = project.tools
      .map(tool => `<span class="tool-tag">${tool}</span>`)
      .join('');

    card.innerHTML = `
      <div class="portfolio-card-media ${mediaAspectClass}">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="portfolio-card-badge">${project.type || project.categoryName}</span>
        <div class="portfolio-play-overlay">
          <div class="portfolio-play-icon">
            <i class="fas ${hasVideo ? 'fa-play' : 'fa-expand'}"></i>
          </div>
        </div>
      </div>
      <div class="portfolio-card-body">
        <div class="portfolio-card-meta">
          <span>${project.categoryName}</span>
          <span style="color: var(--text-muted); font-size: 0.75rem;">${project.year}</span>
        </div>
        <h3 class="portfolio-card-title">${project.title}</h3>
        <p class="portfolio-card-desc">${project.summary}</p>
        <div class="portfolio-card-tools">
          ${toolsHtml}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    container.appendChild(card);
  });
}

/* ---------- 5. Project Modals & Lightbox ---------- */
function initModals() {
  const projectModal = document.getElementById('projectModal');
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  [projectModal, bookingModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Global booking modal triggers
  const bookTriggers = document.querySelectorAll('.trigger-booking-modal');
  bookTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = trigger.getAttribute('data-service') || '';
      openBookingModal(serviceName);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  const mediaContainer = document.getElementById('projectModalMedia');
  const titleElem = document.getElementById('projectModalTitle');
  const metaElem = document.getElementById('projectModalMeta');
  const descElem = document.getElementById('projectModalDesc');
  const toolsElem = document.getElementById('projectModalTools');

  if (!modal) return;

  titleElem.textContent = project.title;
  metaElem.innerHTML = `
    <span><i class="fas fa-tag"></i> ${project.categoryName}</span> &bull;
    <span><i class="fas fa-user-circle"></i> Role: ${project.role}</span> &bull;
    <span><i class="fas fa-briefcase"></i> ${project.client || 'Client Project'}</span> &bull;
    <span><i class="fas fa-calendar-alt"></i> ${project.year}</span>
  `;
  descElem.textContent = project.description || project.summary;

  toolsElem.innerHTML = project.tools
    .map(t => `<span class="tool-tag" style="background: var(--bg-surface); padding: 0.3rem 0.8rem; font-size: 0.8rem;">${t}</span>`)
    .join('');

  if (project.videoUrl) {
    mediaContainer.innerHTML = `
      <div class="video-modal-frame">
        <iframe src="${project.videoUrl}?autoplay=1&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else {
    mediaContainer.innerHTML = `
      <div class="lightbox-image-frame">
        <img src="${project.image}" alt="${project.title}">
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openBookingModal(preselectedService = '') {
  const modal = document.getElementById('bookingModal');
  if (!modal) return;

  if (preselectedService) {
    const selectElem = modal.querySelector('select[name="service"]');
    if (selectElem) {
      for (let option of selectElem.options) {
        if (option.value.toLowerCase().includes(preselectedService.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(m => {
    m.classList.remove('active');
    // If it has an iframe, clear it to stop video audio
    const iframe = m.querySelector('iframe');
    if (iframe) {
      iframe.src = '';
    }
  });
  document.body.style.overflow = '';
}

// Attach to window object for inline onclick handlers
window.openProjectModal = openProjectModal;
window.openBookingModal = openBookingModal;
window.closeAllModals = closeAllModals;

/* ---------- 6. FAQ Accordion ---------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

/* ---------- 7. Contact & Booking Forms ---------- */
function initContactForm() {
  const contactForms = document.querySelectorAll('#contactForm, #bookingForm');

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[name="fullname"]') || form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');
      const serviceInput = form.querySelector('select[name="service"]');
      const messageInput = form.querySelector('textarea[name="message"]') || form.querySelector('textarea[name="details"]');

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Inquiry...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const clientName = nameInput ? nameInput.value.trim() : 'there';
        showToast(`Thank you, ${clientName}! Your inquiry has been sent to Shushil.`);
        form.reset();
        closeAllModals();
      }, 900);
    });
  });
}

/* ---------- 8. Scroll Reveal Animations ---------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    fadeElements.forEach(el => el.classList.add('visible'));
  }
}

/* ---------- 9. Back to Top Button ---------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ---------- Helper: Toast Notification ---------- */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-primary);"></i> ${message}`;
  toast.classList.add('show');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
