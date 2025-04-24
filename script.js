function changeColor() {
  const asciiArt = document.getElementById('asciiArt');
  const colors = ['#00ffcc', '#ff00cc', '#ffff00', '#ff6600', '#66ff66', '#00ccff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  asciiArt.style.color = randomColor;

  // Optional: add emoji confetti effect
  const emoji = document.createElement('div');
  emoji.textContent = '🎉';
  emoji.style.position = 'absolute';
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.top = `0%`;
  emoji.style.fontSize = '2rem';
  emoji.style.animation = 'drop 2s ease-out forwards';
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2000);
}

// Confetti animation
const style = document.createElement('style');
style.textContent = `
  @keyframes drop {
    to { transform: translateY(100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
