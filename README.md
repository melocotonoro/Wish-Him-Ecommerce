# Tírulo: Wish-Him E-commerce de productos para él 

![alt Main](PictureMain-01.png)

Wish-Him, es un página web desarrollada con el fin de crear un espacio de E-commerce dónde 
se podrá encontrar regalos para el género masculino.

En la página principal se podrá visualizar una sección que habla de nosotros (componente "SectionUs"), pero
principalmente se muestra todos los productos disponibles (componente "ItemListContainer").

Estos dos componentes mencionados estan contenidos en el componente "Main", que es el que esta "ruteado" en la interfaz principal ("/")

El componente "ItemListContainer" es donde se realiza "el llamado" para recibir un array de objetos que contiene los productos a mostrar y es el que aglomera al componente "ItemList", mismo que se encarga de generar el contexto donde se encontrará el componente "Item" (representado en la interfaz como los elementos "cards" de productos).

En el componente NavBar, podemos encontrar  a la sección Principal, que "linkea" a la página principal, "Ropa" y "Accesorios" que son las categorías de los productos (al linkear sobre cada sección nos muestra los productos por cada categoría)

En el componente "ItemDetailContainer" se hace el "llamado" del array de productos y filtra uno de los objetos de los productos que se visualizará en el DOM através del componente "ItemDetail".


Cada "card" de productos tiene un  componente tipo botón "Buttons" con la descripción -Ver Detalles-,que nos muestra de forma dinámica al componente  "ItemDetail", con descripcion, precio,fotografía y con el componente "ItemCount" que nos permitirá agregar al carrito (componente "CarWidget") el producto y la cantidad desea.







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
