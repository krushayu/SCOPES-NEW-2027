document.addEventListener('DOMContentLoaded', () => {

  const guidelines = [
    'At least one author is required to register for the conference and oral presentation is mandatory to publish the paper in IEEE Xplore.',
    'Check names, affiliations, and the sequence properly before uploading the camera-ready paper, as further changes cannot be entertained.',
    'Please strictly follow the IEEE conference format: <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" target="_blank" rel="noopener noreferrer">Download IEEE Conference Template (A4)</a>',
    'The camera-ready version must be in PDF format compiled from IEEE PDF eXpress™: <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer">Click here for IEEE PDF eXpress™</a>',
    'Use conference ID <strong>71015</strong> when logging into PDF eXpress. After passing the paper, click on <strong>Approve</strong> option.',
    'Manuscript must be <strong>4 to 6 pages</strong> in IEEE format with similarity index limited to <strong>20%</strong> (single source similarity must be less than 5%).',
    'Upload camera-ready paper in both <strong>.pdf</strong> and <strong>.doc</strong> formats on the CMT portal by <strong>30th November 2026</strong>.',
    'All authors must individually transfer the electronic copyright to IEEE through CMT while submitting the camera-ready paper.',
    'Complete all fields in the registration form and payment details by <strong>30th November 2026</strong>.',
  ];

  document.getElementById('reg-guidelines').innerHTML = guidelines.map((item, i) => `
    <div class="reg-guideline-item">
      <span class="reg-num">${i + 1}</span>
      <p>${item}</p>
    </div>
  `).join('');

  const importantDates = [
    { event: 'Paper Submission Open', date: 'May 1st, 2026', start: new Date('2026-05-01'), end: new Date('2026-08-30'), icon: 'fa-rocket' },
    { event: 'Last Date for Paper Submission', date: 'August 30th, 2026', start: new Date('2026-08-30'), end: new Date('2026-08-30'), icon: 'fa-file-lines' },
    { event: 'Notification of Acceptance', date: 'October 30th, 2026', start: new Date('2026-10-30'), end: new Date('2026-10-30'), icon: 'fa-bell' },
    { event: 'Registration & Camera Ready Submission', date: 'November 30th, 2026', start: new Date('2026-11-30'), end: new Date('2026-11-30'), icon: 'fa-user-check' },
    { event: 'Conference Dates', date: 'February 4th – 6th, 2027', start: new Date('2027-02-04'), end: new Date('2027-02-07'), icon: 'fa-star' },
  ];

  const statusMeta = {
    active: { label: 'Active Now', color: '#22c55e' },
    upcoming: { label: 'Upcoming', color: '#6366f1' },
    over: { label: 'Closed', color: '#ef4444' },
  };

  function getStatus(item) {
    const now = new Date();
    if (now > item.end) return 'over';
    if (now >= item.start) return 'active';
    return 'upcoming';
  }

  const chainEl = document.getElementById('reg-dates-chain');
  chainEl.innerHTML = importantDates.map((item, index) => {
    const status = getStatus(item);
    const meta = statusMeta[status];
    return `
      <div class="reg-chain-item ${status}">
        <div class="reg-chain-card" style="--accent:${meta.color};">
          <div class="reg-chain-node" style="background:${meta.color};"><i class="fas ${item.icon}"></i></div>
          <h3 class="reg-chain-event">${item.event}</h3>
          <span class="reg-chain-badge" style="background:${meta.color};">${meta.label}</span>
          <div class="reg-chain-date" style="color:${meta.color};"><i class="fas fa-calendar-days" style="font-size:11px;"></i> ${item.date}</div>
        </div>
        ${index < importantDates.length - 1 ? '<div class="reg-chain-line"></div>' : ''}
      </div>
    `;
  }).join('');

  const instructions = [
    'Scan the QR code or click the payment button to complete the registration payment.',
    'Enter Author Name, Email ID, Phone Number, Category, and Institute details correctly.',
    'Select IEEE Member / Non-IEEE category carefully before payment submission.',
    'Upload payment proof or transaction details during camera-ready submission.',
    'Keep the payment receipt safely for future verification and conference registration confirmation.',
    'For any payment-related issue, contact the conference coordinator immediately.',
  ];
  document.getElementById('reg-instructions').innerHTML = instructions.map((text, i) => `
    <div class="reg-instruction-item">
      <span>${i + 1}</span>
      <p>${text}</p>
    </div>
  `).join('');
});
