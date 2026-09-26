const projects = [
  { id: 'procession', index: '01 / VISUAL EXPLORATION', title: 'The Procession', image: 'assets/procession.webp', alt: 'A procession of elephants and people emerging through orange dust before a huge sun', text: 'An exploration of collective movement and monumental scale. One immense silhouette carries the first impression; smaller figures and trees reveal the wider story on a second look.', caption: 'COMPOSITION / SCALE / ATMOSPHERE' },
  { id: 'lion', index: '02 / VISUAL EXPLORATION', title: 'The Sovereign', image: 'assets/lion.webp', alt: 'A lion on a rocky outcrop before a glowing sun', text: 'A single subject, a single circle of light. This frame studies how strong shape and a limited palette can create a sense of presence.', caption: 'SILHOUETTE / COLOUR / PRESENCE' },
  { id: 'ghat', index: '03 / VISUAL EXPLORATION', title: 'The Quiet Hour', image: 'assets/ghat.webp', alt: 'A person and cat look across a river at sunset', text: 'A quieter image built around shared attention. The figures lead us toward the distant city, while the warmth of the horizon holds the mood.', caption: 'STILLNESS / STORY / LIGHT' },
  { id: 'companions', index: '04 / VISUAL EXPLORATION', title: 'Somewhere, Together', image: 'assets/companions.webp', alt: 'A person and cat sit together under a tree overlooking a lake', text: 'A study in negative space and companionship. Broad fields of blue and amber make the relationship legible from far away.', caption: 'NEGATIVE SPACE / RELATIONSHIP / COLOUR' }
];

document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }, { threshold: .12 });
  document.querySelectorAll('.intro-copy, .section-heading, .work-card, .manifesto-inner, .about-layout').forEach((el) => { el.classList.add('reveal'); observer.observe(el); });

  const hero = document.querySelector('.hero-image');
  const manifesto = document.querySelector('.manifesto-image');
  let pending = false;
  const updateParallax = () => {
    const top = window.scrollY;
    const heroProgress = Math.min(top / window.innerHeight, 1);
    hero.style.transform = `scale(${1.07 + heroProgress * .11}) translateY(${heroProgress * 2}%)`;
    const rect = manifesto.parentElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      manifesto.style.transform = `scale(1.08) translateY(${(progress - .5) * 5}%)`;
    }
    pending = false;
  };
  window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(updateParallax); } }, { passive: true });
}

const dialog = document.getElementById('project-dialog');
const image = document.getElementById('dialog-image');
let current = 0;
function showProject(index) {
  current = index;
  const project = projects[index];
  image.src = project.image;
  image.alt = project.alt;
  document.getElementById('dialog-index').textContent = project.index;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-text').textContent = project.text;
  document.getElementById('dialog-caption').textContent = project.caption;
  if (!dialog.open) dialog.showModal();
}
document.querySelectorAll('[data-project]').forEach((button) => button.addEventListener('click', () => showProject(projects.findIndex((item) => item.id === button.dataset.project))));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.getElementById('dialog-next').addEventListener('click', () => showProject((current + 1) % projects.length));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
