function openPeriod(periodId) {
    document.querySelectorAll('.period').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    document.getElementById(periodId).classList.add('active');
    event.target.classList.add('active');
  }

  function toggleDynasty(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }
