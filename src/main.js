 (function () {
  const el = document.querySelector('[data-testid="test-user-time"]');
        if (!el) return;
        function pad(n) {
          return n.toString().padStart(2, "0");
        }
        function tick() {
          const d = new Date();
          el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
            d.getSeconds()
          )}`;
        }
        tick();
        setInterval(tick, 1000);
      })();