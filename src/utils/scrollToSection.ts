export function scrollToSection(id: string) {
  const container = document.getElementById('main-scroll-container');
  const section = document.getElementById(id);

  if (!container || !section) return;

  const top =
    container.scrollTop +
    section.getBoundingClientRect().top -
    container.getBoundingClientRect().top;

  container.scrollTo({
    top,
    behavior: 'smooth',
  });

  window.history.replaceState(null, '', `#${id}`);
  history.pushState(null, '', window.location.pathname + window.location.search);
}