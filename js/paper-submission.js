document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cmt-submit-btn');
  let btnState = 'idle';

  function render() {
    btn.className = `cmt-btn cmt-btn--${btnState}`;
    btn.disabled = btnState === 'loading';
    if (btnState === 'idle') {
      btn.innerHTML = '<i class="fas fa-rocket cmt-btn-icon"></i> Submit via CMT';
    } else if (btnState === 'loading') {
      btn.innerHTML = '<span class="cmt-ring"></span> Launching...';
    } else if (btnState === 'success') {
      btn.innerHTML = '<i class="fas fa-circle-check cmt-btn-icon"></i> Opening CMT!';
    }
  }

  btn.addEventListener('click', () => {
    if (btnState === 'loading') return;
    btnState = 'loading';
    render();
    setTimeout(() => {
      btnState = 'success';
      render();
      setTimeout(() => {
        window.open('https://cmt3.research.microsoft.com/SCOPES2027', '_blank');
        btnState = 'idle';
        render();
      }, 1000);
    }, 2000);
  });
});
