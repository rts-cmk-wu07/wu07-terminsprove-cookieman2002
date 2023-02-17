# TerminsPrøve

### Navn: Magnus Larsen

### Hold: wu-07

### Uddanelse: webudvikler

## Backend

i have used the `trainer api` that have been distributed to the project
- [Documentation](https://github.com/cookieman2002/trainer-api)

## Approach
## MVP

## Frontend stack

- [React](#react)
- [React-router-dom](#react-router-dom)
- [React-use-cookie](#react-use-cookie)
- [Tailwind](#tailwindcss)
- [Axios](#axios)
- [Feather-icons-react](#feather-icons-react)
- [classnames](#classnames)



### react-router-dom

i am using `react-router-dom` to route through the diffrent urls and get diffrent elememts and doesnt re render all at the same it takes small bits

this how you install
```bash
npm i react-router-dom
```
or
```bash
yarn add react-router-dom
```

### tailwindcss
I am using TailwindCss its a utility-first css framework that make its easier for the developer to make styling and have a good overview on where all the styling is
by using classnames


this how you install
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



### axios

i used `axios` that its a promised-based http client and it atomatically stringify data where `fetch` you have to stringify it manually and it in response you get data where in `fetch` you get a body

this how you install

```bash
npm i axios
```
or
```bash
yarn add axios
```
### feather-icons-react

`feather-icons-react` is a npm package that contains a library full of svg logos


this how you install
```bash
npm i feather-icons-react
```
or
```bash
yarn add feather-icons-react
```
### react
I am using react is a framework that has been used in my Framework since its the primary library we have been teach in so its the framework i feel most comfortable with. I could have used angulars framework since i have worked with it before but it would have taken more time since its not something i'm really comfortable with.

this how you install
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

### classnames
`classnames` is a npm package that is a simple javascript utility that puts classes together

````js
const classChange = classnames({
        "text-big": isSchedule,
        "text-medium": !isSchedule,
        "flex": isSchedule,
        "hidden": isClassDetails
    })
````

this how you install

```bash
npm i classnames
```
or
```bash
yarn add classnames
```

### react-use-cookie

`react-use-cookie` is a npm package that makes an cookie and an `useContext` that saves you time to make a cookie and a context seperatly

this how you install

```bash
npm i react-use-cookie
```
or
```bash
yarn add react-use-cookie
```