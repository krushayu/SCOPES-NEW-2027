document.addEventListener('DOMContentLoaded', () => {
  const scheduleData = {
    1: [{ time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }],
    2: [{ time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }],
    3: [{ time: 'Coming Soon...', program: 'Coming Soon...', venue: 'Coming Soon...' }],
  };
  const dates = { 1: '04-02-2027', 2: '05-02-2027', 3: '06-02-2027' };

  const tabs = document.querySelectorAll('.schedule-tab');
  const dayTitle = document.getElementById('schedule-day-title');
  const dayDate = document.getElementById('schedule-day-date');
  const tbody = document.getElementById('schedule-table-body');

  function render(day) {
    dayTitle.textContent = `Day ${day}`;
    dayDate.textContent = `Date: ${dates[day]}`;
    tbody.innerHTML = scheduleData[day].map((item) => `
      <tr>
        <td class="schedule-time">${item.time}</td>
        <td class="schedule-program">${item.program}</td>
        <td class="schedule-venue">${item.venue}</td>
      </tr>
    `).join('');
    tabs.forEach((tab) => tab.classList.toggle('active', tab.getAttribute('data-day') === String(day)));
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => render(Number(tab.getAttribute('data-day'))));
  });

  render(1);
});
