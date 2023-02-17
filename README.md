## Approach
# MVP

## Frontend stack

## react-router
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

this how you install
```bash
npm i react-router-dom
```
or
```bash
yarn add react-router-dom
```

## tailwindcss
Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing, typography, shadows, and more to create a completely custom component design — without leaving your HTML or writing a single line of custom CSS.


```bash
npm install -D tailwindcss
npx tailwindcss init
```
or
````bash
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init
````

set up tailwindcss

#File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}
````
#File index.css or app.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;
````



## axios

```bash
npm i axios
```
or
```bash
yarn add axios
```
## feather-icons-react

```bash
npm i feather-icons-react
```
or
```bash
yarn add feather-icons-react
```
## react

```bash
npx create-react-app my-app
cd my-app
npm start
```
or
```bash
yarn create react-app my-app
cd my-app
yarn start

```

## framer-motion

```bash
npm i framer-motion
```
or
```bash
yarn add framer-motion
```

## classnames

```bash
npm i classnames
```
or
```bash
yarn add classnames
```