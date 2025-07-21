// Definición de tipos para TypeScript
type Theme = 'dark' | 'light';

const toggleButton: HTMLElement | null = document.getElementById('theme-toggle');
const rootElement: HTMLElement = document.documentElement;

/**
 * Aplica el tema guardado en localStorage o usa las preferencias del sistema
 */
function applySavedTheme(): void {
    const savedTheme: Theme | null = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        rootElement.classList.add('dark');
    } else {
        rootElement.classList.remove('dark');
    }
}

/**
 * Cambia entre temas claro y oscuro
 */
function toggleTheme(): void {
    const isDark: boolean = rootElement.classList.toggle('dark');
    const newTheme: Theme = isDark ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    
    // Emitir evento personalizado para otros componentes
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
}

// Inicialización
if (toggleButton) {
    // Aplicar tema al cargar
    applySavedTheme();
    
    // Configurar evento click
    toggleButton.addEventListener('click', toggleTheme);
    
    // Escuchar cambios en las preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySavedTheme);
} else {
    console.error('No se encontró el botón de cambio de tema');
}