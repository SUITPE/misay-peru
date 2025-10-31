# MisayPeru - Sitio Web Institucional

Sitio web corporativo de MisayPeru, empresa peruana especializada en texturas, acabados y productos para construcción y remodelación.

## 🚀 Stack Tecnológico

- **Vite** - Build tool de nueva generación
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library

## 📋 Prerequisitos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd misay-peru

# Instalar dependencias
npm install
```

## 🏃‍♂️ Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

## 🏗️ Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
misay-peru/
├── public/
│   └── assets/
│       └── images/          # Imágenes (logos, productos, servicios)
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── ViewToggle.tsx
│   │   └── ContactForm.tsx
│   ├── pages/               # Páginas del sitio
│   │   ├── Home.tsx
│   │   ├── Nosotros.tsx
│   │   ├── Servicios.tsx
│   │   ├── Productos.tsx
│   │   └── Contacto.tsx
│   ├── data/                # Data layer
│   │   ├── products.ts
│   │   └── services.ts
│   ├── hooks/               # Custom React hooks
│   │   └── useScrollPosition.ts
│   ├── styles/              # Estilos globales
│   │   └── globals.css
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.cjs
├── tsconfig.json
└── README.md
```

## 🖼️ Assets Requeridos

Coloca las siguientes imágenes en `public/assets/images/`:

### Logo
- `logo.png` - Logo de MisayPeru

### Productos
- `griferias.jpg`
- `sanitarios.jpg`
- `pisos.jpg`
- `revestimientos.jpg`
- `equipamiento-cocina.jpg`

### Servicios
- `servicio-microhormigon.jpg`

**Nota:** Si alguna imagen no está disponible, el sitio mostrará placeholders con gradientes de color.

## 🎨 Características

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SPA Navigation** - Client-side routing con React Router
- ✅ **Animaciones** - Smooth transitions con Framer Motion
- ✅ **SEO Optimizado** - Meta tags y Open Graph
- ✅ **Accesibilidad** - Semantic HTML y ARIA attributes
- ✅ **Performance** - Lazy loading, code splitting
- ✅ **TypeScript** - Type safety en todo el proyecto
- ✅ **Validación de Formularios** - Client-side validation

## 🧩 Aplicación de MCP Context7

Este proyecto implementa las mejores prácticas modernas de desarrollo frontend:

### 1. **Component-Driven Architecture**
- Componentes atómicos reutilizables (ProductCard, ServiceCard, Hero)
- Separación clara de responsabilidades (components, pages, data)
- Props tipadas con TypeScript para type safety

### 2. **Performance Optimizations**
- Lazy loading de imágenes (`loading="lazy"`)
- Code splitting por rutas (Vite's automatic chunking)
- Manual chunks para vendors (react, framer-motion)
- Passive scroll listeners para mejor rendimiento

### 3. **Modern Routing**
- React Router v6 con lazy route components
- Scroll restoration automática
- Page transitions con AnimatePresence

### 4. **Animation Layering**
- Framer Motion para animaciones declarativas
- Scroll-triggered animations con `whileInView`
- Micro-interactions en hover/focus states
- Layout animations con `layoutId`

### 5. **Type Safety**
- TypeScript strict mode
- Interfaces para Product y Service types
- Type-safe form handling
- No implicit any

### 6. **Accessibility**
- Semantic HTML5 elements
- ARIA labels y roles
- Keyboard navigation (ESC to close modal)
- Focus management en modal
- Form validation con error announcements

### 7. **Responsive Grid System**
- Mobile-first Tailwind breakpoints
- Flexible grid layouts (grid/gallery toggle)
- Container queries para componentes
- Fluid typography

## 📝 Editar Contenido

Para modificar el contenido del sitio, edita los archivos en `src/data/`:

- `products.ts` - Productos del catálogo
- `services.ts` - Servicios ofrecidos

Los textos de las páginas se encuentran directamente en los componentes de `src/pages/`.

## 🔧 Configuración

### Tailwind
Personaliza colores y estilos en `tailwind.config.cjs`

### Vite
Configura build options en `vite.config.ts`

### TypeScript
Ajusta reglas de compilación en `tsconfig.json`

## 📱 Navegación

- **Inicio** - `/` - Landing page
- **Nosotros** - `/nosotros` - Información de la empresa
- **Servicios** - `/servicios` - Servicios ofrecidos
- **Productos** - `/productos` - Catálogo de productos
- **Contacto** - `/contacto` - Formulario de contacto

## 🐛 Troubleshooting

### Imágenes no se muestran
- Verifica que las imágenes estén en `public/assets/images/`
- Confirma que los nombres coincidan con los especificados en `products.ts` y `services.ts`

### Error de TypeScript
```bash
# Verificar tipos
npm run build
```

## 📄 Licencia

© 2025 MisayPeru. Todos los derechos reservados.

## 👥 Contacto

Para consultas sobre el proyecto, contacta a MisayPeru:
- Email: info@misayperu.com
- Teléfono: +51 999 999 999
- Ubicación: Lima, Perú

---

Desarrollado con ❤️ usando tecnologías modernas de frontend
