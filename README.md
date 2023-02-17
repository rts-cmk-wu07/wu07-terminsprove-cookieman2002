# Backend

# Approach
# MVP

# Frontend stack

- [react](#react)


## react-router-dom

i am using `react-router-dom` to route through the diffrent urls and get diffrent elememts and doesnt re render all at the same it takes small bits

this how you install
```bash
npm i react-router-dom
```
or
```bash
yarn add react-router-dom
```

## tailwindcss
I am using TailwindCss its a utility-first css framework that make its easier for the developer to make styling and have a good overview on where all the styling is
by using classnames


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
I am using react is a framework that has been used in my Framework since its the primary library we have been teach in so its the framework i feel most comfortable with. I could have used angulars framework since i have worked with it before but it would have taken more time since its not something i'm really comfortable with.
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

## classnames

```bash
npm i classnames
```
or
```bash
yarn add classnames
```

## react-use-cookie
```bash
npm i react-use-cookie
```
or
```bash
yarn add react-use-cookie
```