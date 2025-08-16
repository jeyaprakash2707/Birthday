// Set the date (e.g., 20 August 2025)
const targetDate = new Date("Aug 20, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");
const bgMusic = document.getElementById("bg-music");
const playMusicBtn = document.getElementById("play-music");

// Music button event listener
playMusicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playMusicBtn.innerHTML = '<i class="fas fa-pause mr-2"></i>Pause Music';
  } else {
    bgMusic.pause();
    playMusicBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Play Music';
  }
});

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎂 Happy Birthday My Love ❤️!";
    alert("💖 Surprise! Wishing you the happiest birthday, my love!");
    // Try to play music if it's not already playing
    if (bgMusic.paused) {
      // We need to handle the play promise since it might be rejected
      const playPromise = bgMusic.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented, update the button to show the correct state
          playMusicBtn.innerHTML = '<i class="fas fa-play mr-2"></i>Play Music';
        });
      }
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Particles.js Config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff" },
    "move": { "enable": true, "speed": 2 }
  }
});

// Falling Hearts Animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
