/* ==========================================================================
   Navbar interactivity — mirrors the original React Navbar component:
   - scroll shadow effect
   - mobile slide-in menu (open/close, outside click, overlay)
   - desktop "Call for Papers" hover dropdown
   - mobile "Call for Papers" tap-toggle submenu
   - highlight the active page link
   - brochure download buttons
   ========================================================================== */

function initNavbar() {
  const navbar = document.getElementById('site-navbar');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileToggleIcon = document.getElementById('mobile-toggle-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  const cfpDropdown = document.getElementById('cfp-dropdown');
  const cfpDropdownMenu = document.getElementById('cfp-dropdown-menu');
  const mobileCfpToggle = document.getElementById('mobile-cfp-toggle');
  const mobileCfpSubmenu = document.getElementById('mobile-cfp-submenu');
  const mobileCfpArrow = document.getElementById('mobile-cfp-arrow');
  const brochureDesktop = document.getElementById('brochure-btn-desktop');
  const brochureMobile = document.getElementById('brochure-btn-mobile');

  if (!navbar) return;

  let isOpen = false;

  const setMenuOpen = (open) => {
    isOpen = open;
    mobileMenu.classList.toggle('active', open);
    menuOverlay.style.display = open ? 'block' : 'none';
    mobileToggleBtn.classList.toggle('active', open);
    mobileToggleIcon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
    document.body.style.overflow = open ? 'hidden' : 'unset';
  };

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuOpen(!isOpen);
    });
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', () => setMenuOpen(false));
  }
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => setMenuOpen(false));
  }

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (
      isOpen &&
      !e.target.closest('.mobile-toggle') &&
      !e.target.closest('.mobile-menu')
    ) {
      setMenuOpen(false);
    }
  });

  // Close mobile menu when a nav link inside it is clicked
  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-submenu-link').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
  }

  // Desktop dropdown — open on hover
  if (cfpDropdown && cfpDropdownMenu) {
    cfpDropdown.addEventListener('mouseenter', () => cfpDropdownMenu.classList.add('show'));
    cfpDropdown.addEventListener('mouseleave', () => cfpDropdownMenu.classList.remove('show'));
  }

  // Mobile "Call for Papers" tap-toggle
  if (mobileCfpToggle && mobileCfpSubmenu) {
    mobileCfpToggle.addEventListener('click', () => {
      const nowOpen = mobileCfpSubmenu.style.display !== 'block';
      mobileCfpSubmenu.style.display = nowOpen ? 'block' : 'none';
      mobileCfpArrow.classList.toggle('open', nowOpen);
    });
  }

  // Brochure download buttons
  [brochureDesktop, brochureMobile].forEach((btn) => {
    const base = window.location.pathname.includes('/pages/') ? '../' : '';
    if (btn) btn.addEventListener('click', () => { window.location.href = base + 'data/docs/Brochure.pdf'; });
  });

  // Highlight the current page in the nav + mobile menu
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('[data-page]').forEach((link) => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active-link');
    }
  });
}

document.addEventListener('partialsLoaded', initNavbar);
