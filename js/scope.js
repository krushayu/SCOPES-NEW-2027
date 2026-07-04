document.addEventListener('DOMContentLoaded', () => {

  const trackSDGImages = {
    0: [
      { src: _base + 'assets/sdg/track1-1.png', alt: 'track1-1' },
      { src: _base + 'assets/sdg/track1-2.png', alt: 'track1-2' },
      { src: _base + 'assets/sdg/track1-3.png', alt: 'track1-3' },
      { src: _base + 'assets/sdg/track1-4.png', alt: 'track1-4' },
    ],
    1: [
      { src: _base + 'assets/sdg/track2-1.png', alt: 'track2-1' },
      { src: _base + 'assets/sdg/track2-2.png', alt: 'track2-2' },
      { src: _base + 'assets/sdg/track2-3.png', alt: 'track2-3' },
      { src: _base + 'assets/sdg/track2-4.png', alt: 'track2-4' },
    ],
    2: [
      { src: _base + 'assets/sdg/track3-1.png', alt: 'track3-1' },
      { src: _base + 'assets/sdg/track3-2.png', alt: 'track3-2' },
      { src: _base + 'assets/sdg/track3-3.png', alt: 'track3-3' },
      { src: _base + 'assets/sdg/track3-4.png', alt: 'track3-4' },
      { src: _base + 'assets/sdg/track3-5.png', alt: 'track3-5' },
    ],
    3: [
      { src: _base + 'assets/sdg/track4-1.png', alt: 'track4-1' },
      { src: _base + 'assets/sdg/track4-2.png', alt: 'track4-2' },
      { src: _base + 'assets/sdg/track4-3.png', alt: 'track4-3' },
      { src: _base + 'assets/sdg/track4-4.png', alt: 'track4-4' },
      { src: _base + 'assets/sdg/track4-5.png', alt: 'track4-5' },
      { src: _base + 'assets/sdg/track4-6.png', alt: 'track4-6' },
    ],
    4: [
      { src: _base + 'assets/sdg/track5-1.png', alt: 'track5-1' },
      { src: _base + 'assets/sdg/track5-2.png', alt: 'track5-2' },
      { src: _base + 'assets/sdg/track5-3.png', alt: 'track5-3' },
      { src: _base + 'assets/sdg/track5-4.png', alt: 'track5-4' },
      { src: _base + 'assets/sdg/track5-5.png', alt: 'track5-5' },
    ],
    5: [
      { src: _base + 'assets/sdg/track6-1.png', alt: 'track6-1' },
      { src: _base + 'assets/sdg/track6-2.png', alt: 'track6-2' },
      { src: _base + 'assets/sdg/track6-3.png', alt: 'track6-3' },
      { src: _base + 'assets/sdg/track6-4.png', alt: 'track6-4' },
      { src: _base + 'assets/sdg/track6-5.png', alt: 'track6-5' },
    ],
    6: [
      { src: _base + 'assets/sdg/track7-1.png', alt: 'track7-1' },
      { src: _base + 'assets/sdg/track7-2.png', alt: 'track7-2' },
      { src: _base + 'assets/sdg/track7-3.png', alt: 'track7-3' },
    ],
    7: [
      { src: _base + 'assets/sdg/track8-1.png', alt: 'track8-1' },
      { src: _base + 'assets/sdg/track8-2.png', alt: 'track8-2' },
      { src: _base + 'assets/sdg/track8-3.png', alt: 'track8-3' },
      { src: _base + 'assets/sdg/track8-4.png', alt: 'track8-4' },
      { src: _base + 'assets/sdg/track8-5.png', alt: 'track8-5' },
      { src: _base + 'assets/sdg/track8-6.png', alt: 'track8-6' },
      { src: _base + 'assets/sdg/track8-7.png', alt: 'track8-7' },
    ],
  };

  const tracks = [
    {
      icon: 'fa-signal', title: 'Advanced Signal, Image & Intelligent Systems', color: '#e74c3c',
      topics: [
        'AI/ML and deep learning for signal, speech, image, and video processing',
        'Image enhancement, restoration, segmentation, and recognition',
        'Computer vision and pattern recognition',
        'Medical image and biomedical signal analytics',
        'Multimodal signal and data understanding',
        'Integrated sensing and communication (ISAC)',
        'Intelligent perception systems for autonomous applications',
        'Neuromorphic and bio-inspired signal processing',
        'Edge AI for real-time intelligent systems',
      ],
    },
    {
      icon: 'fa-network-wired', title: 'Next-Generation Communication Technologies', color: '#2980b9',
      topics: [
        '5G-Advanced and 6G communication systems',
        'Semantic and intelligent communications',
        'Internet of Things (IoT) and wireless sensor networks',
        'Non-terrestrial and satellite communication systems',
        'Advanced antenna and microwave technologies',
        'Optical and high-speed communication systems',
        'Secure, reliable, and energy-efficient communication networks',
        'Network virtualization and software-defined networking',
      ],
    },
    {
      icon: 'fa-bolt', title: 'Smart Power Systems & Sustainable Energy', color: '#f39c12',
      topics: [
        'Smart grids and digital energy systems',
        'Renewable energy integration and energy storage technologies',
        'Electric vehicles and charging infrastructure',
        'Distributed energy resources and microgrids',
        'Advanced power electronic converters and drives',
        'High-voltage engineering and insulation diagnostics',
        'Power system protection, monitoring, and control',
        'Energy management and sustainable power technologies',
      ],
    },
    {
      icon: 'fa-microchip', title: 'Embedded Systems, VLSI & Advanced Chip Design', color: '#27ae60',
      topics: [
        'ASIC, FPGA, and System-on-Chip (SoC) design',
        'Low-power and high-performance VLSI systems',
        'Mixed-signal and RF integrated circuits',
        'AI accelerators and neuromorphic chip design',
        'Physical design and hardware security',
        'Embedded and real-time systems',
        'Quantum computing hardware and architectures',
        'Biochips and lab-on-chip technologies',
      ],
    },
    {
      icon: 'fa-industry', title: 'Industry 4.0/5.0 & Intelligent Automation', color: '#8e44ad',
      topics: [
        'Cyber-physical systems and digital twins',
        'Smart manufacturing and industrial automation',
        'Robotics and autonomous systems',
        'Industrial IoT and edge intelligence',
        'Predictive maintenance and industrial analytics',
        'Human-machine collaboration and intelligent control',
        'UAVs, underwater vehicles, and autonomous platforms',
        'Intelligent sensing for industrial applications',
      ],
    },
    {
      icon: 'fa-flask', title: 'Interdisciplinary & Emerging Technologies', color: '#00897b',
      topics: [
        'Smart cities and intelligent infrastructure',
        'Intelligent healthcare and assistive technologies',
        'Geospatial analytics and remote sensing applications',
        'Earth observation and space technologies',
        'Disaster mitigation and management technologies',
        'Human-centric and sustainable technologies',
        'Industry-academia collaboration and technology transfer',
        'AI and ML applications in engineering systems',
      ],
    },
    {
      icon: 'fa-atom', title: 'Quantum Control, Computing & Learning', color: '#6c5ce7',
      topics: [
        'Quantum computing and quantum algorithms',
        'Quantum machine learning',
        'Quantum control and estimation',
        'Quantum sensing and metrology',
        'Quantum communication and networking',
        'Quantum cryptography and post-quantum security',
        'Quantum applications in engineering and science',
        'Computational complexity in quantum systems',
      ],
    },
    {
      icon: 'fa-seedling', title: 'Precision Agriculture & Digital Farming Technologies', color: '#2ecc71',
      topics: [
        'Sensor-based precision crop management',
        'Remote sensing, UAVs, and geospatial analytics in agriculture',
        'AI, machine learning, and big data for smart agriculture',
        'IoT, robotics, and automation in farming systems',
        'Precision horticulture and protected cultivation',
        'Precision livestock, dairy, poultry, and aquaculture systems',
        'Digital agriculture and decision support systems',
        'Climate-smart agriculture and natural resource management',
        'Socio-economic and policy aspects of precision agriculture',
      ],
    },
  ];

  let active = 0;
  const tabsEl = document.getElementById('scope-tabs');
  const panelEl = document.getElementById('scope-panel');

  function render() {
    tabsEl.innerHTML = tracks.map((track, i) => `
      <button class="scope-tab ${active === i ? 'active' : ''}" style="--c:${track.color};" data-index="${i}">
        <span class="scope-tab-icon"><i class="fas ${track.icon}"></i></span>
        <span class="scope-tab-label">${track.title}</span>
      </button>
    `).join('');

    const track = tracks[active];
    const sdgs = trackSDGImages[active] || [];
    panelEl.style.setProperty('--c', track.color);
    panelEl.innerHTML = `
      <div class="scope-panel-header">
        <div class="scope-panel-icon"><i class="fas ${track.icon}"></i></div>
        <h2>${track.title}</h2>
      </div>
      <div class="scope-panel-content">
        <div class="scope-panel-topics">
          <ul class="scope-panel-list">
            ${track.topics.map((topic) => `<li><span class="scope-panel-dot"></span>${topic}</li>`).join('')}
          </ul>
        </div>
        <div class="scope-panel-sdgs">
          <div class="sdg-grid">
            ${sdgs.map((sdg) => `
              <div class="sdg-card">
                <img src="${sdg.src}" alt="${sdg.alt}" class="sdg-img" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    tabsEl.querySelectorAll('.scope-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        active = Number(btn.getAttribute('data-index'));
        render();
      });
    });
  }

  render();
});
