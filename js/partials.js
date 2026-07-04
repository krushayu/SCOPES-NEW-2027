/* ==========================================================================
   Shared Navbar + Footer markup
   Injected into every page via #navbar-placeholder / #footer-placeholder
   so the markup only needs to live in one place.
   ========================================================================== */

const _base = window.location.pathname.includes('/pages/') ? '../' : '';

const NAVBAR_HTML = `
<nav class="navbar" id="site-navbar">
  <!-- Desktop Header -->
  <div class="desktop-header">
    <div class="conference-header">
      <div class="conference-header-content">
        <div class="header-logo left-header-logo">
          <a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src="${_base}assets/logos/cutm_logo.png" alt="CUTM Logo" class="header-logo-img" />
          </a>
        </div>

        <div class="conference-title">
          <div class="conference-badge">3<sup>rd</sup> International Conference<br />on</div>
          <h1>Signal Processing, Communication, Power &amp; Embedded Systems (SCOPES)-2027</h1>
          <div class="conference-info">
            <img src="${_base}assets/logos/scopes_logo.png" alt="IEEE Logo" class="info-sponsor-logo" />
            <div class="conference-info-details">
              <div class="info-item">
                <span class="info-text">📍 Centurion University of Technology and Management, Paralakhemundi, Odisha</span>
              </div>
              <div class="info-item">
                <span class="info-text">📅 4<sup>th</sup> - 6<sup>th</sup> February 2027</span>
              </div>
            </div>
            <img src="${_base}assets/logos/com_soc.png" alt="Computer Society" class="info-sponsor-logo" />
          </div>
          <div class="sponsor-tag">
            <span class="tag-icon">⚡</span>
            Technically Co-Sponsored by IEEE Bhubaneswar Section &amp; Computer Society Chapter (CH11163)
          </div>
        </div>

        <div class="header-logo right-header-logo">
          <img src="${_base}assets/logos/ieee_logo.png" alt="IEEE Logo" class="header-logo-img" />
        </div>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <div class="nav-container">
      <div class="nav-content">
        <ul class="nav-menu">
          <li class="nav-item"><a href="${_base}index.html" class="nav-link" data-page="index.html"><span class="link-icon"><i class="fas fa-circle-info"></i></span><span class="link-text">Home</span><span class="link-underline"></span></a></li>
          <li class="nav-item"><a href="${_base}pages/imp-dates.html" class="nav-link" data-page="imp-dates.html"><span class="link-icon"><i class="fas fa-calendar"></i></span><span class="link-text">Dates</span><span class="link-underline"></span></a></li>
          <li class="nav-item"><a href="${_base}pages/committee.html" class="nav-link" data-page="committee.html"><span class="link-icon"><i class="fas fa-users"></i></span><span class="link-text">Committee</span><span class="link-underline"></span></a></li>
          <li class="nav-item"><a href="${_base}pages/sponsors.html" class="nav-link" data-page="sponsors.html"><span class="link-icon"><i class="fas fa-trophy"></i></span><span class="link-text">Sponsors</span><span class="link-underline"></span></a></li>

          <li class="nav-item dropdown" id="cfp-dropdown">
            <a href="#call-for-papers" class="nav-link">
              <span class="link-icon"><i class="fas fa-book"></i></span>
              <span class="link-text">Call for Papers</span>
              <i class="fas fa-chevron-down dropdown-icon"></i>
              <span class="link-underline"></span>
            </a>
            <ul class="dropdown-menu" id="cfp-dropdown-menu">
              <li><a href="${_base}pages/scope.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-flask"></i></span>Scope of the Conference</a></li>
              <li><a href="${_base}pages/imp-dates.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-clock"></i></span>Important Dates</a></li>
              <li><a href="${_base}pages/publication.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-upload"></i></span>Publication</a></li>
              <li><a href="${_base}pages/paper-submission.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-file-lines"></i></span>Paper Submission</a></li>
              <li><a href="${_base}pages/program-schedule.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-calendar-days"></i></span>Program Schedule</a></li>
              <li><a href="${_base}pages/places.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-location-dot"></i></span>Place of Visit</a></li>
              <li><a href="${_base}pages/contact.html" class="dropdown-link"><span class="dropdown-item-icon"><i class="fas fa-address-card"></i></span>Contact</a></li>
            </ul>
          </li>

          <li class="nav-item"><a href="${_base}pages/registration.html" class="nav-link" data-page="registration.html"><span class="link-icon"><i class="fas fa-clipboard-list"></i></span><span class="link-text">Registration</span><span class="link-underline"></span></a></li>
          <li class="nav-item"><a href="${_base}pages/accommodation.html" class="nav-link" data-page="accommodation.html"><span class="link-icon"><i class="fas fa-university"></i></span><span class="link-text">Accommodation</span><span class="link-underline"></span></a></li>
          <li class="nav-item"><a href="${_base}pages/contact.html" class="nav-link" data-page="contact.html"><span class="link-icon"><i class="fas fa-address-card"></i></span><span class="link-text">Contact</span><span class="link-underline"></span></a></li>
        </ul>

        <div class="nav-cta">
          <button class="brochure-btn" id="brochure-btn-desktop">
            <i class="fas fa-download btn-icon"></i>
            <span>Brochure</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Header -->
  <div class="mobile-header">
    <div class="mobile-top-bar">
      <div class="mobile-logos">
        <div class="mobile-logo-item">
          <a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src="${_base}assets/logos/cutm_logo.png" alt="CUTM Logo" class="mobile-logo-img" />
          </a>
        </div>
        <div class="mobile-conference-title">
          <div class="mobile-badge">3rd International Conference<br />on</div>
          <div class="mobile-tagline">Signal Processing, Communication, Power &amp; Embedded Systems</div>
        </div>
        <div class="mobile-logo-item">
          <img src="${_base}assets/logos/ieee_logo.png" alt="IEEE Logo" class="mobile-logo-img" />
        </div>
      </div>

      <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle menu">
        <i class="fas fa-bars" id="mobile-toggle-icon"></i>
      </button>
    </div>
    <br>
    <div class="mobile-bottom-bar">
      <div class="mobile-info-strip">
        <div class="mobile-info-item">
          <span class="mobile-info-icon">📅</span>
          <span class="mobile-info-text">Feb 4th-6th, 2027</span>
        </div>
        <div class="mobile-info-item">
          <span class="mobile-info-icon">📍</span>
          <span class="mobile-info-text">CUTM, PKD, Odisha</span>
        </div>
        <div class="mobile-info-item">
          <span class="mobile-info-icon">⚡</span>
          <span class="mobile-info-text">IEEE Co-Sponsored</span>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile Side Menu -->
<div class="mobile-menu" id="mobile-menu">
  <div class="mobile-menu-header">
    <div class="mobile-menu-logo">
      <div class="menu-logo-item">
        <a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">
          <img src="${_base}assets/logos/cutm_logo.png" alt="CUTM" class="menu-logo-img" />
        </a>
      </div>
      <div class="menu-logo-item">
        <div class="menu-logo-text">
          <span class="menu-logo-main">SCOPES</span>
          <span class="menu-logo-year">2027</span>
        </div>
      </div>
      <div class="menu-logo-item">
        <img src="${_base}assets/logos/ieee_logo.png" alt="IEEE" class="menu-logo-img" />
      </div>
    </div>
    <button class="mobile-close" id="mobile-close-btn" aria-label="Close menu">
      <i class="fas fa-xmark"></i>
    </button>
  </div>

  <div class="mobile-menu-content">
    <div class="mobile-conference-info">
      <h3>3rd International Conference<br />on</h3>
      <p>Signal Processing, Communication, Power &amp; Embedded Systems</p>
      <div class="mobile-date">
        <span class="date-icon">📅</span>
        4th - 6st February 2027
      </div>
      <div class="mobile-venue">
        <span class="venue-icon">📍</span>
        Centurion University, Pkd, Odisha
      </div>
    </div>

    <div class="mobile-menu-divider"><span>Navigation</span></div>

    <ul class="mobile-nav-menu">
      <li class="mobile-nav-item"><a href="${_base}index.html" class="mobile-nav-link" data-page="index.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-circle-info"></i></span><span class="mobile-link-text">Home</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
      <li class="mobile-nav-item"><a href="${_base}pages/imp-dates.html" class="mobile-nav-link" data-page="imp-dates.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-calendar"></i></span><span class="mobile-link-text">Dates</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
      <li class="mobile-nav-item"><a href="${_base}pages/committee.html" class="mobile-nav-link" data-page="committee.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-users"></i></span><span class="mobile-link-text">Committee</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
      <li class="mobile-nav-item"><a href="${_base}pages/sponsors.html" class="mobile-nav-link" data-page="sponsors.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-trophy"></i></span><span class="mobile-link-text">Sponsors</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>

      <li class="mobile-nav-item">
        <div class="mobile-nav-link" id="mobile-cfp-toggle">
          <div class="mobile-link-content">
            <span class="mobile-link-icon-wrapper"><i class="fas fa-book"></i></span>
            <span class="mobile-link-text">Call for Papers</span>
          </div>
          <i class="fas fa-chevron-down mobile-dropdown-arrow" id="mobile-cfp-arrow"></i>
        </div>
        <ul class="mobile-submenu" id="mobile-cfp-submenu" style="display:none;">
          <li><a href="${_base}pages/scope.html" class="mobile-submenu-link">Scope of the Conference</a></li>
          <li><a href="${_base}pages/imp-dates.html" class="mobile-submenu-link">Important Dates</a></li>
          <li><a href="${_base}pages/publication.html" class="mobile-submenu-link">Publication</a></li>
          <li><a href="${_base}pages/paper-submission.html" class="mobile-submenu-link">Paper Submission</a></li>
          <li><a href="${_base}pages/program-schedule.html" class="mobile-submenu-link">Program Schedule</a></li>
          <li><a href="${_base}pages/places.html" class="mobile-submenu-link">Place of Visit</a></li>
          <li><a href="${_base}pages/contact.html" class="mobile-submenu-link">Contact</a></li>
        </ul>
      </li>

      <li class="mobile-nav-item"><a href="${_base}pages/registration.html" class="mobile-nav-link" data-page="registration.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-clipboard-list"></i></span><span class="mobile-link-text">Registration</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
      <li class="mobile-nav-item"><a href="${_base}pages/accommodation.html" class="mobile-nav-link" data-page="accommodation.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-university"></i></span><span class="mobile-link-text">Accommodation</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
      <li class="mobile-nav-item"><a href="${_base}pages/contact.html" class="mobile-nav-link" data-page="contact.html"><div class="mobile-link-content"><span class="mobile-link-icon-wrapper"><i class="fas fa-address-card"></i></span><span class="mobile-link-text">Contact</span></div><i class="fas fa-chevron-right mobile-link-arrow"></i></a></li>
    </ul>

    <div class="mobile-cta-section">
      <button class="mobile-brochure-btn" id="brochure-btn-mobile">
        <i class="fas fa-download mobile-btn-icon"></i>
        Download Conference Brochure
      </button>
      <a href="${_base}pages/paper-submission.html" class="mobile-register-btn" id="mobile-submit-link">Submit Paper</a>
    </div>
  </div>
</div>

<div class="menu-overlay" id="menu-overlay"></div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-grid">
            <div class="footer-section">
              <h3 class="footer-title"><i class="fas fa-paper-plane section-icon"></i> Quick Links</h3>
              <ul class="footer-links">
                <li><a href="${_base}index.html">Home</a></li>
                <li><a href="${_base}pages/committee.html">Committee</a></li>
                <li><a href="${_base}pages/sponsors.html">Sponsors</a></li>
                <li><a href="${_base}pages/registration.html">Registration</a></li>
              </ul>

              <h3 class="footer-title" style="margin-top:20px;"><i class="fas fa-download section-icon"></i> Downloads</h3>
              <ul class="footer-links">
                <li><a href="${_base}data/docs/Brochure.pdf" target="_blank" rel="noopener noreferrer" class="download-link">Brochure</a></li>
                <li><a href="${_base}data/docs/invitation.pdf" target="_blank" rel="noopener noreferrer" class="download-link">Invitation</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3 class="footer-title"><i class="fas fa-book-open section-icon"></i> Author Guidance</h3>
              <ul class="footer-links">
                <li><a href="${_base}pages/scope.html">Scope</a></li>
                <li><a href="${_base}pages/imp-dates.html">Important Dates</a></li>
                <li><a href="${_base}pages/paper-submission.html">Paper Submission</a></li>
                <li><a href="${_base}pages/places.html">Place of Visit</a></li>
                <li><a href="${_base}pages/accommodation.html">Accommodation</a></li>
              </ul>
            </div>

            <div class="footer-section contact-section">
              <h3 class="footer-title"><i class="fas fa-location-dot section-icon"></i> Contact Us</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-location-dot"></i></div>
                  <div class="contact-details">
                    <h4>Address</h4>
                    <p>
                      Room No: F-221, 2nd Floor, CRC-2<br />
                      Department of ECE, School of Engineering &amp; Technology,<br />
                      Centurion University of Technology and Management,
                      At: R-Sitapur, Allurinagar, Paralakhemundi<br />
                      Dist: Gajapati, Odisha, India - 761211
                    </p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-phone"></i></div>
                  <div class="contact-details">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+917008242454">+91 7008242454</a> (Chair)<br />
                      <a href="tel:+919937563329">+91 9937563329</a> (Convener)
                    </p>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                  <div class="contact-details">
                    <h4>Email</h4>
                    <p><a href="mailto:scopes2027@cutm.ac.in">scopes2027@cutm.ac.in</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-right">
          <div class="location-container">
            <h3 class="location-title"><i class="fas fa-location-dot section-icon"></i> Location</h3>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7553.683218262049!2d84.1376441!3d18.8052108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766844388834!5m2!1sen!2sin"
                title="Conference Location"
                class="google-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-container">
      <p class="developed-by">
        Design &amp; Developed by
        <a href="https://www.linkedin.com/in/krushayu/" target="_blank" rel="noopener noreferrer" class="developer-link">krush@yu</a>
        | 🌐
        <a href="https://krushayu.in" target="_blank" rel="noopener noreferrer" class="developer-link">krushayu.in</a>
      </p>
      <p class="copyright">© SCOPES-2027 || All rights reserved by Centurion University of Technology &amp; Management, Odisha, India</p>
      <div class="flag-counter-wrap">
        <a href="http://s05.flagcounter.com/more/xLj1">
          <img src="https://s05.flagcounter.com/count2/xLj1/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style="border:0;" />
        </a>
      </div>
    </div>
  </div>
</footer>

<div class="mobile-footer">
  <div class="mobile-footer-content">
    <p class="developed-by">
      Design &amp; Developed by
      <a href="https://www.linkedin.com/in/krushayu/" target="_blank" rel="noopener noreferrer" class="developer-link">krush@yu</a>
      | 🌐
      <a href="https://krushayu.in" target="_blank" rel="noopener noreferrer" class="developer-link">krushayu.in</a>
    </p>
    <p class="mobile-copyright">© SCOPES-2027 || All rights reserved by Centurion University of Technology &amp; Management, Odisha, India</p>
    <div class="flag-counter-wrap">
      <a href="http://s05.flagcounter.com/more/xLj1">
        <img src="https://s05.flagcounter.com/count2/xLj1/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style="border:0;" />
      </a>
    </div>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAVBAR_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Let other scripts know the partials are ready
  document.dispatchEvent(new CustomEvent('partialsLoaded'));
});
