# 🌟 Portfolio Personal

Este es mi portfolio personal desarrollado con [Astro](https://astro.build/) y estilizado utilizando [Tailwind CSS](https://tailwindcss.com/) junto a estilos personalizados en CSS. El sitio muestra mis proyectos, experiencia y redes de contacto de forma clara, responsiva y profesional.

---

## 🚀 Tecnologías utilizadas

- **Astro**: Framework moderno para sitios estáticos y rápidos.
- **Tailwind CSS**: Framework utilitario para estilos.
- **CSS personalizado**: Ajustes finos en el diseño.
- **TypeScript**: Tipado estático para mayor robustez.
- **Componentes SVG**: Íconos personalizados como componentes Astro.

---

## 📁 Estructura del proyecto

```
.
├── public/
│   └── data/                 # Imágenes públicas accesibles directamente
│       ├── img-perfil.jpeg
│       ├── img-perfil.png
│       └── favicon.svg
├── src/
│   ├── assets/               # Recursos estáticos (por ahora vacío)
│   ├── components/           # Componentes reutilizables
│   │   ├── icons/            # Íconos SVG personalizados como componentes Astro
│   │   ├── Badge.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Projects.astro
│   │   ├── SectionContainer.astro
│   │   └── SocialPill.astro
├── layouts/
│   └── Layout.astro          # Layout base utilizado en las páginas
├── pages/
│   └── index.astro           # Página principal del sitio
├── astro.config.mjs          # Configuración principal de Astro
├── tailwind.config.js        # Configuración personalizada de Tailwind
├── postcss.config.js         # Configuración para PostCSS
├── tsconfig.json             # Configuración de TypeScript (si se usa)
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Este archivo
```

## 📷 Secciones del Portfolio

- **Header**: Navegación principal del sitio.
- **Projects**: Lista de proyectos realizados.
- **Experience**: Detalles sobre experiencia laboral.
- **Social Links**: Enlaces a redes sociales (LinkedIn, GitHub, Gmail, etc.).
- **Footer**: Pie de página con información adicional.

## 🛠 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Instalar dependencias
npm install

# Levantar el entorno de desarrollo
npm run dev
```

## 📦 Scripts disponibles

```bash
npm run dev       # Iniciar el servidor local de desarrollo
npm run build     # Generar una build optimizada para producción
npm run preview   # Previsualizar la build de producción
```

## ✨ Notas

- Todas las imágenes se almacenan en `public/data`.
- Los íconos sociales están implementados como componentes Astro reutilizables.
- Tailwind permite un diseño responsive y flexible fácilmente.
- El sitio está optimizado para accesibilidad y rendimiento.

---


Última actualización: 19 de julio de 2025 
