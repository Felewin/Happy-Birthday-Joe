function celebrateWithConfetti() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#FFD700', '#FF6B6B', '#90EE90', '#87CEEB']
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 1.2,
      shapes: ['circle', 'square']
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 0.75,
      shapes: ['circle']
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

// Initial confetti burst
celebrateWithConfetti();

// Continuous confetti on click
document.addEventListener('click', celebrateWithConfetti);

// Periodic confetti bursts
setInterval(celebrateWithConfetti, 5000);