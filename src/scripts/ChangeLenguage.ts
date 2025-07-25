const languageBtn = document.getElementById(
  "language-toggle"
) as HTMLButtonElement | null;
const languageLabel = document.getElementById(
  "language-label"
) as HTMLSpanElement | null;

if (languageBtn && languageLabel) {
  const currentPath: string = window.location.pathname;
  const isEnglish: boolean = currentPath.startsWith("/en");

  // Establecer el texto del botón según el idioma actual
  languageLabel.innerHTML = isEnglish
    ? `<img
        src="https://flagcdn.com/w2560/us.webp"
        alt="Bandera de Estados Unidos"
        class="block mx-auto w-[23px] h-[20px] rounded-full select-none cursor-pointer bg-[hsl(0,0%,90%)] transition-colors duration-300"
      />`
    : `<img
        src="https://flagcdn.com/w2560/ar.webp"
        alt="Bandera de Argentina"
        class="block mx-auto w-[23px] h-[20px] rounded-full select-none cursor-pointer bg-[hsl(0,0%,90%)] transition-colors duration-300"
      />`;

  languageBtn.addEventListener("click", () => {
    // Forzar la navegación a la raíz del idioma correspondiente
    const newPath: string = isEnglish ? "/" : "/en";
    
    // Usar replaceState para eliminar cualquier fragmento del historial
    window.history.replaceState({}, "", window.location.pathname);
    
    // Redirigir a la nueva ruta
    window.location.pathname = newPath;
  });
}