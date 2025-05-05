document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("details");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) {
        const videos = dropdown.querySelectorAll("video");
        videos.forEach((video) => {
          video.currentTime = 0;
          video.play().catch(() => {}); // avoid autoplay error
        });
      } else {
        const videos = dropdown.querySelectorAll("video");
        videos.forEach((video) => {
          video.pause();
          video.currentTime = 0;
        });
      }
    });
  });
});
