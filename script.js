const container = document.querySelector('.plane-container');

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function createPlane() {
  if (!container) return;

  const plane = document.createElement('div');
  plane.classList.add('plane');
  plane.innerHTML = '✈';

  // Posição inicial e “desvio” para simular rota
  const x = rand(-20, 80); // em vw
  const dx = rand(50, 220); // em px (vira variável CSS)

  plane.style.setProperty('--x', `${x}vw`);
  plane.style.setProperty('--dx', `${dx}px`);

  plane.style.left = '0';
  plane.style.fontSize = `${rand(14, 28)}px`;
  plane.style.animationDuration = `${rand(12, 22)}s`;

  container.appendChild(plane);

  setTimeout(() => {
    plane.remove();
  }, 25000);
}

setInterval(createPlane, 1300);
for (let i = 0; i < 10; i++) createPlane();

