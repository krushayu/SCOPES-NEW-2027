document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();

  const dates = [
    {
      event: 'Paper Submission Open',
      date: 'May 1st, 2026',
      desc: 'Portal opens for manuscript submissions across all tracks.',
      start: new Date('2026-05-01'), end: new Date('2026-08-30'),
      icon: 'fa-rocket',
    },
    {
      event: 'Last Date for Paper Submission',
      date: 'August 30th, 2026',
      desc: 'Final deadline to submit your full paper via Microsoft CMT.',
      start: new Date('2026-08-30'), end: new Date('2026-08-30'),
      icon: 'fa-file-lines',
    },
    {
      event: 'Notification of Acceptance',
      date: 'October 30th, 2026',
      desc: 'Authors will be notified about acceptance or rejection.',
      start: new Date('2026-10-30'), end: new Date('2026-10-30'),
      icon: 'fa-bell',
    },
    {
      event: 'Registration & Camera Ready',
      date: 'November 1st, 2026',
      desc: 'Start date for registration and camera-ready paper submission.',
      start: new Date('2026-11-01'), end: new Date('2026-11-30'),
      icon: 'fa-user-check',
    },
    {
      event: 'Conference Dates',
      date: 'February 4th – 6th, 2027',
      desc: 'SCOPES 2027 at Centurion University of Technology and Management, Paralakhemundi, Odisha.',
      start: new Date('2027-02-04'), end: new Date('2027-02-07'),
      icon: 'fa-star',
    },
  ];

  const statusMeta = {
    active: { label: 'Active Now', color: '#22c55e', glow: 'rgba(34,197,94,0.25)' },
    upcoming: { label: 'Upcoming', color: '#00b4d8', glow: 'rgba(0,180,216,0.2)' },
    over: { label: 'Closed', color: '#94a3b8', glow: 'rgba(148,163,184,0.15)' },
  };

  function getStatus(item) {
    if (now > item.end) return 'over';
    if (now >= item.start) return 'active';
    return 'upcoming';
  }

  const roadmap = document.getElementById('impd-roadmap');
  const rowsHtml = dates.map((item, index) => {
    const status = getStatus(item);
    const meta = statusMeta[status];
    const isLeft = index % 2 === 0;
    return `
      <div class="impd-row ${isLeft ? 'left' : 'right'} ${status}">
        <div class="impd-rm-card" style="--glow:${meta.glow}; --accent:${meta.color};">
          <div class="impd-rm-card-inner">
            <div class="impd-rm-top">
              <span class="impd-rm-badge" style="background:${meta.color};">${meta.label}</span>
              <span class="impd-rm-num">0${index + 1}</span>
            </div>
            <h3 class="impd-rm-event">${item.event}</h3>
            <p class="impd-rm-desc">${item.desc}</p>
            <div class="impd-rm-date" style="color:${meta.color};">📅 ${item.date}</div>
          </div>
        </div>
        <div class="impd-node" style="background:${meta.color}; box-shadow: 0 0 0 5px ${meta.glow}, 0 0 0 10px ${meta.glow};">
          <span class="impd-node-icon"><i class="fas ${item.icon}"></i></span>
        </div>
        <div class="impd-spacer"></div>
      </div>
    `;
  }).join('');

  roadmap.insertAdjacentHTML('beforeend', rowsHtml);
});
