# 🌟 Portfolio Personal

Este es mi portfolio personal desarrollado con [Astro](https://astro.build/) y estilizado utilizando [Tailwind CSS](https://tailwindcss.com/) junto a estilos personalizados en CSS. El sitio muestra mis proyectos, experiencia, habilidades y redes de contacto de forma clara, responsiva y profesional.

---

## 🚀 Tecnologías utilizadas

* **Astro**: Framework moderno para sitios rápidos y estáticos.
* **Tailwind CSS**: Framework utilitario para estilos rápidos y consistentes.
* **CSS personalizado**: Ajustes de diseño adicionales para mayor control visual.
* **TypeScript**: Tipado estático que aporta robustez y escalabilidad.
* **Componentes SVG**: Íconos personalizados creados como componentes Astro.

---

## 📁 Estructura del proyecto

```
.
├── public/
│   └── data/                        # Imágenes públicas accesibles directamente
│       ├── img-perfil.webp
│       ├── og&twitter-image.jpg
│       ├── ProjectAconcagua.webp
│       ├── ProjectBackEndBuenSabor.webp
│       └── ProjectFrontEndBuenSabor.webp
├── src/
│   ├── assets/                      # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/                 # Componentes reutilizables de Astro
│   │   ├── icons/                   # Íconos SVG como componentes Astro
│   │   ├── Button.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Line.astro
│   │   ├── Projects.astro
│   │   ├── SectionContainer.astro
│   │   ├── Separator.astro
│   │   ├── SkillsCard.astro
│   │   └── SocialPill.astro
│   ├── i18n/                        # Internacionalización (traducciones)
│   ├── layouts/                     # Layout base del sitio
│   ├── pages/                       # Páginas principales (index.astro, en/index.astro)
│   └── scripts/                     # Scripts TypeScript para interacción
├── astro.config.mjs                # Configuración principal de Astro
├── tailwind.config.js              # Configuración personalizada de Tailwind
├── postcss.config.js               # Configuración para PostCSS
├── tsconfig.json                   # Configuración de TypeScript
├── package.json                    # Dependencias y scripts del proyecto
└── README.md                       # Este archivo
```

---

## 📷 Secciones del Portfolio

* **Header**: Barra de navegación superior.
* **Projects**: Lista de proyectos destacados.
* **Experience**: Experiencia laboral y académica.
* **Skills**: Tecnologías y herramientas dominadas.
* **About Me**: Presentación personal.
* **Contact**: Formulario o enlaces de contacto directo.
* **Footer**: Pie de página con enlaces y créditos.

---

## 🛠 Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/Ignacio-Molina-0804/portfolio.git
cd portfolio

# 2. Instalar las dependencias
npm install

# 3. Levantar el entorno de desarrollo
npm run dev
```

---

## 📦 Scripts disponibles

```bash
npm run dev       # Iniciar el servidor local de desarrollo
npm run build     # Generar una build optimizada para producción
npm run preview   # Previsualizar la build de producción
```

---

## ✨ Notas

* Todas las imágenes se almacenan en `public/data/`.
* Los íconos sociales y de tecnologías están implementados como componentes Astro reutilizables.
* Tailwind permite un diseño responsive y flexible con utilidades directas.
* El sitio soporta español e inglés mediante el sistema de internacionalización (`src/i18n`).
* El sitio está optimizado para **rendimiento** y **accesibilidad**.

---

📅 **Última actualización**: 26 de julio de 2025
