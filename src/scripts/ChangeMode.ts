type Theme = 'dark' | 'light';

const toggleButton: HTMLElement | null = document.getElementById('theme-toggle');
const rootElement: HTMLElement = document.documentElement;
const TRANSITION_CLASS = 'theme-transition';

function applySavedTheme(): void {

    const savedTheme: Theme | null = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        rootElement.classList.add('dark');
    } else {
        rootElement.classList.remove('dark');
    }
    
}

function toggleTheme(): void {

    if (rootElement.classList.contains(TRANSITION_CLASS)) return;
    
    rootElement.classList.add(TRANSITION_CLASS);
    
    const isDark: boolean = rootElement.classList.toggle('dark');
    const newTheme: Theme = isDark ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
    
    setTimeout(() => {
        rootElement.classList.remove(TRANSITION_CLASS);
    }, 500); 

}


if (toggleButton) {

    applySavedTheme();
    
    toggleButton.addEventListener('click', toggleTheme);
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySavedTheme);

} else {

    console.error('No se encontró el botón de cambio de tema');

}