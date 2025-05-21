document.addEventListener("DOMContentLoaded", () => {
  const urlToCheck = "https://btcgambler.duckdns.org/login";
  const statusEl = document.getElementById("app-status-indicator");
  if (!statusEl) return;

  statusEl.style.fontWeight = "bold";
  statusEl.style.marginLeft = "10px";

  function updateStatus(indicator, color, label) {
    statusEl.textContent = `${indicator} ${label}`;
    statusEl.style.color = color;
  }

  async function checkStatus() {
    updateStatus("⏳", "gray", "Checking status...");

    try {
      const res = await fetch(urlToCheck, { method: "GET" });

      // Handle specific HTTP status codes
      if (!res.ok || res.status >= 400) {
        updateStatus("🚧", "orange", "Under Construction");
      } else {
        updateStatus("🟢", "limegreen", "Online");
      }
    } catch (err) {
      // Handle network errors
      updateStatus("🚧", "orange", "Under Construction");
    }
  }

  checkStatus();
  setInterval(checkStatus, 60_000);
});
