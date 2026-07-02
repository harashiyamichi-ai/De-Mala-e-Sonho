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

// ===== Botão WhatsApp do Hero: rolar “sobre → como funciona → pacotes” =====
(function () {
  const btn = document.getElementById('btn-hero-whatsapp');
  if (!btn) return;

  const ids = ['sobre', 'planejamento', 'pacotes'];

  function scrollSequence(index) {
    if (index >= ids.length) {
      window.open(btn.href, '_blank', 'noopener');
      return;
    }

    const el = document.getElementById(ids[index]);
    if (!el) return scrollSequence(index + 1);

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Tempo suficiente para a rolagem suave acontecer antes do próximo scroll
    setTimeout(() => scrollSequence(index + 1), 900);
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollSequence(0);
  });
})();

