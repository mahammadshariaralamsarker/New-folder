function displayLiveTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
      document.getElementById('date').textContent = now.toLocaleDateString();
      document.getElementById('day').textContent = now.toLocaleString('default', { weekday: 'long' });
    }
    setInterval(displayLiveTime, 1000);

    