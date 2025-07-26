type Theme = 'dark' | 'light';

const toggleButton: HTMLElement | null = document.getElementById('theme-toggle');
const rootElement: HTMLElement = document.documentElement;
const TRANSITION_CLASS = 'theme-transition';

/**
 * Aplica el tema guardado en localStorage o usa las preferencias del sistema
 */
function applySavedTheme(): void {
    const savedTheme: Theme | null = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Aplicar sin transición la primera vez
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        rootElement.classList.add('dark');
    } else {
        rootElement.classList.remove('dark');
    }
}

/**
 * Cambia entre temas claro y oscuro con transición suave
 */
function toggleTheme(): void {
    // Prevenir múltiples clics durante la transición
    if (rootElement.classList.contains(TRANSITION_CLASS)) return;
    
    // Agregar clase de transición
    rootElement.classList.add(TRANSITION_CLASS);
    
    const isDark: boolean = rootElement.classList.toggle('dark');
    const newTheme: Theme = isDark ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    
    // Emitir evento personalizado
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
    
    // Remover clase de transición después de que termine
    setTimeout(() => {
        rootElement.classList.remove(TRANSITION_CLASS);
    }, 500); // Debe coincidir con la duración de la transición en CSS
}

// Inicialización
if (toggleButton) {
    applySavedTheme();
    
    toggleButton.addEventListener('click', toggleTheme);
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySavedTheme);
} else {
    console.error('No se encontró el botón de cambio de tema');
}