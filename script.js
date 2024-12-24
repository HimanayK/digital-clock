function updateClock() {
    const now = new Date();
    const data = now.toLocaleTimeString();
    document.getElementById('clock').textContent = data;
  }
  setInterval(updateClock, 1000);
  updateClock(); // Initial call