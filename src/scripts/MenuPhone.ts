document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement | null;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement | null;
  const menuIcon = menuToggle?.querySelector('svg');

  if (!menuToggle || !mobileMenu || !menuIcon) {
    console.error('No se encontraron los elementos del menú');
    return;
  }

  menuToggle.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation();
    
    if (mobileMenu.classList.contains('opacity-0')) {
      // Abrir menú con animación
      mobileMenu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'max-h-0');
      mobileMenu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto', 'max-h-[500px]');
      menuIcon.classList.add('rotate-90');
    } else {
      // Cerrar menú con animación
      mobileMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'max-h-0');
      mobileMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto', 'max-h-[500px]');
      menuIcon.classList.remove('rotate-90');
    }
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!menuToggle.contains(target)) {
      mobileMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'max-h-0');
      mobileMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto', 'max-h-[500px]');
      menuIcon.classList.remove('rotate-90');
    }
  });

  // Cerrar menú al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'max-h-0');
      mobileMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto', 'max-h-[500px]');
      menuIcon.classList.remove('rotate-90');
    });
  });
});