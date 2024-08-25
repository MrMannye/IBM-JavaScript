# Proyecto

Este proyecto es una aplicación que realiza una busqueda a una API [aquí](./path/to/travel.json).

![Ejemplo de uso](./public/muestra.png)

## Funcionamiento

Para buscar un lugar, debes teclear 'beaches' en el buscador que está en la sección del navbar para mostrar la información de la API.

## Instalación

Para instalar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio: `git clone [URL del repositorio]`
2. Navega al directorio del proyecto: `cd [directorio del proyecto]`
3. Instala las dependencias: `npm install`

## Uso

Para utilizar este proyecto, sigue los siguientes pasos:

1. Ejecuta la aplicación: `npm start`
2. [Describe los pasos necesarios para utilizar la funcionalidad del proyecto]

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
