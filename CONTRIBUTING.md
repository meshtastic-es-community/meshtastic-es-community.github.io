# 🤝 Pasos contribuir al repositorio

## ⚙️ Requisitos previos

Asegúrate de tener o instalar en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [Git](https://git-scm.com/)
- Una cuenta de GitHub

## 🚀 Ejecución local del sitio

Para ejecutar el sitio de forma local, sigue estos pasos:

```bash
git clone https://github.com/tu-usuario/meshtastic-es-community.github.io.git
cd meshtastic-es-community.github.io
npm install
npm run start
```

Esto iniciará un servidor local en `http://localhost:3000`.

### 🔍 Utilizar el buscador en local

Por defecto, el buscador no está habilitado en el entorno local. Para activarlo, tienes que compilar la web completa y luego iniciar el servidor:

```bash
npm run build
npm run serve
```

Esto iniciará el mismo servidor local en `http://localhost:3000` con una compilación completa del sitio.

## 🌿 Flujo para hacer aportaciones

### 1. Haz un fork del repositorio

Ve a [https://github.com/meshtastic-es-community/meshtastic-es-community.github.io](https://github.com/meshtastic-es-community/meshtastic-es-community.github.io) y haz clic en “Fork” para crear una copia en tu cuenta.

### 2. Clona tu fork localmente

```bash
git clone https://github.com/tu-usuario/meshtastic-es-community.github.io.git
cd meshtastic-es-community.github.io
```

### 3. Crea una nueva rama para tus cambios

```bash
git checkout -b nombre-de-tu-rama
```

Ejemplo: `traduccion-instalacion`, `mejora-readme`, `fix-link-roto`, etc.

### 4. Realiza los cambios necesarios

Edita o crea archivos en:

- `docs/`: para documentación.
- `src/pages/`: para páginas personalizadas.
- `static/img/`: para imágenes y archivos estáticos.

### 5. Prueba localmente tu versión

```bash
npm run build && npm run serve
```

Revisa en `http://localhost:3000` que todo funcione correctamente.

### 6. Guarda y sube tus cambios

```bash
git add .
git commit -m "Descripción clara de los cambios"
git push origin nombre-de-tu-rama
```

### 7. Abre un Pull Request

Ve a tu repositorio en GitHub y haz clic en “Compare & pull request”. Añade una descripción detallada explicando qué has hecho y por qué.

### 8. Espera la revisión

Tu propuesta será revisada por los administradores. Podrían solicitarte ajustes antes de aprobar la integración.

## 💡 Consejos

- Asegúrate de que tus cambios no rompen el sitio (`npm run start` o `npm run build`).
- Sigue la estructura y el estilo del contenido ya existente.
- Usa títulos claros y lenguaje accesible.
- Verifica que los enlaces funcionen correctamente.
- Si tienes dudas o propuestas, abre una **Issue** antes de comenzar.
