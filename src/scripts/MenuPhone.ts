document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement | null;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement | null;

  if (!menuToggle || !mobileMenu) {
    console.error('No se encontraron los elementos del menú');
    return;
  }

  menuToggle.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation(); // Evita que el evento llegue al document.click
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!menuToggle.contains(target) && !mobileMenu.contains(target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Cerrar menú al hacer clic en un enlace (opcional)
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
});