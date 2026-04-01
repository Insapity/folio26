# Portfolio Site

Простой сайт-портфолио на `React + Vite`, подготовленный для публикации на GitHub Pages.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Публикация на GitHub Pages

В `vite.config.js` уже установлен базовый путь:

```js
base: '/folio26/'
```

Это нужно для репозитория `https://insapity.github.io/folio26/`.

После сборки содержимое папки `dist/` можно публиковать в GitHub Pages через
ветку `gh-pages`, GitHub Actions или другой удобный сценарий.
