const languageBtn = document.getElementById("language-toggle") as HTMLButtonElement | null;
const languageLabel = document.getElementById("language-label") as HTMLSpanElement | null;

if (languageBtn && languageLabel) {
  const currentPath: string = window.location.pathname;
  const isEnglish: boolean = currentPath.startsWith("/en");

  // Establecer el texto del botón según el idioma actual
  languageLabel.textContent = isEnglish ? "ES" : "EN";

  languageBtn.addEventListener("click", () => {
    const newPath: string = isEnglish
      ? currentPath.replace(/^\/en/, "") || "/"
      : "/en" + currentPath;

    window.location.pathname = newPath;
  });
}
