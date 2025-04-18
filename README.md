# About This Project

This repository is intended for small Proof of Concepts (POCs) and quick tryouts. It serves as a sandbox for experimenting with various features, libraries, and ideas in a React + TypeScript environment.

### Future Plans

- More POCs will be added over time to explore different functionalities and use cases.
- Contributions are welcomed! Feel free to fork the repository, add your own POCs, and submit a pull request.

### Current Features

- **i18n Localization**: Demonstrates internationalization using `i18next` and `react-i18next`.
- **Bar Chart Visualization**: Includes a bar chart implementation using `recharts`.

### How to Contribute

1. Fork the repository.
2. Create a new branch for your POC.
3. Add your changes and ensure they are well-documented.
4. Submit a pull request for review.

We look forward to your contributions and ideas!

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## i18n Localization

This project uses `i18next` and `react-i18next` for internationalization (i18n) support. It is configured to support English and Spanish translations, with the ability to add more languages as needed.

### Setting Up Lingo.dev

Lingo.dev is used to manage and automate translations. Follow these steps to get started:

1. **Authentication**:
   Run the following command to authenticate with Lingo.dev:
   ```bash
   npx lingo.dev@latest auth --login
   ```
   This will open a browser window for login. If you encounter issues, refer to the [Lingo.dev Authentication Guide](https://docs.lingo.dev/quickstart).

2. **Initialization**:
   Initialize the Lingo.dev project by running:
   ```bash
   npx lingo.dev@latest init
   ```
   This command will guide you through setting up your source and target locales, as well as configuring file patterns for translation.

3. **Translation**:
   To translate your content, run:
   ```bash
   npx lingo.dev@latest i18n
   ```
   This will generate translation files (e.g., `es.json`, `fr.json`) in the `locales` folder.

### Translation Files

- **English**: `src/locales/en.json`
- **Spanish**: `src/locales/es.json`

You can add more languages by creating additional JSON files in the `src/locales/` directory and updating the `i18n.ts` configuration.

For more details, visit the [Lingo.dev Quickstart Guide](https://docs.lingo.dev/quickstart).
