<table align="center">
<tr>
<td><img src="./public/vite.svg" alt="Vite" width="100" height="100"></td>
<td><img src="./public/react.svg" alt="React" width="100" height="100"></td>
<td><img src="./public/typescript.svg" alt="TypeScript" width="100" height="100"></td>
<td><img src="./public/tailwind.svg" alt="TailwindCSS" width="100" height="100"></td>
</tr>
</table>

# Vite + React + TypeScript + TailwindCSS Example Project

This example project is a Phone Catalogue and it was created with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/).

This projects purpose is to show how to use these technologies together.

Since this project is only a frontend project, it reads the data from a [`items.json`](./src/assets/items.json) file.

## Demo

[Phone Catalogue](https://phone-catalogue.kovacsbalinthunor.com/)

## Usage

### Clone repository

```bash
git clone https://github.com/MemerGamer/vite-react-ts-tailwind-example.git
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

## To recreate this project from the base

### Install vite with react and typescript

```bash
npm init vite@latest
# fill in the project name and select react-ts
```

### Install tailwindcss

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```bash
npx tailwindcss init -p
```

### Install heroicons

```bash
npm install @heroicons/react
```
