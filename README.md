# UTAGRAM

> Clon de Instagram desarrollado para la comunidad de la **Universidad Técnica de Ambato (UTA)**.

---

## 📌 Descripción

**UTAGRAM** es una aplicación web inspirada en Instagram, construida con React.js, diseñada para que los estudiantes, docentes y personal de la UTA puedan compartir momentos, proyectos y experiencias universitarias en una plataforma propia.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| [React.js](https://reactjs.org/) | Librería principal de UI |
| [React Router DOM](https://reactrouter.com/) | Navegación entre páginas |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y diseño responsivo |
| [React Icons](https://react-icons.github.io/react-icons/) | Íconos de la interfaz |

---

## 📁 Estructura del proyecto

```
utagram/
├── public/
├── src/
│   ├── App.js                        # Componente raíz
│   ├── index.js                      # Punto de entrada
│   ├── index.css                     # Estilos globales
│   ├── Pages/
│   │   ├── HomePage/
│   │   │   └── HomePage.jsx          # Página principal
│   │   └── Router/
│   │       └── Router.jsx            # Configuración de rutas
│   └── components/
│       └── Sidebar/
│           ├── Sidebar.jsx           # Componente de barra lateral
│           ├── Sidebar.css           # Estilos del sidebar
│           └── SlidebarConfig.js     # Configuración del menú
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Instalación y ejecución local

### Prerrequisitos
- Node.js >= 14
- npm >= 6

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/utagram.git

# 2. Entrar al directorio
cd utagram

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:3000`

---

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Ejecuta la app en modo desarrollo |
| `npm run build` | Genera la build de producción |
| `npm test` | Ejecuta los tests |

---

## 🗺️ Funcionalidades actuales

- [x] Estructura base de la aplicación
- [x] Sidebar de navegación con íconos
- [x] Sistema de rutas con React Router
- [ ] Página de inicio (Feed)
- [ ] Autenticación de usuarios
- [ ] Publicación de fotos
- [ ] Perfil de usuario
- [ ] Sistema de likes y comentarios
- [ ] Búsqueda de usuarios

---

## 👨‍💻 Autor

Desarrollado como proyecto universitario para la **Universidad Técnica de Ambato**.

---

## 📄 Licencia

Este proyecto es de uso académico.
