# Wish-Him E-commerce de productos para él 

## Diseñado y creado por Melisa Oro

![alt Main](https://res.cloudinary.com/ds7jaqjll/image/upload/v1666134278/Wish-Him/presentacion-01_xk9oem.jpg)


Wish-Him, es un página web desarrollada con el fin de crear un espacio de E-commerce dónde 
se podrá encontrar regalos para el género masculino.

En la página **principal/inicio** se podrá visualizar una presentación animada *componente "SectionUs"*, y más abajo se muestran todos los productos disponibles en el *componente "ItemListContainer"*.

Estos dos componentes mencionados estan contenidos en el *componente "Main"*, que es el que esta "ruteado" en la interfaz principal ("/").

El *componente "ItemListContainer"* es donde se realiza "el llamado" para recibir un array de objetos que contiene los productos a mostrar en el *componente "ItemList"*, mismo que se encarga de generar el contexto y aglomera al *componente "Item"* (representado en la interfaz como las **cards** de cada producto que se mostrará al usuario).

En el *componente NavBar*, podemos encontrar el logo que, al clickearlo "rutea" a la página de inicio, la sección **Principal**, que "linkea" a la página principal, las secciones **Ropa** y **Accesorios** (al clickear sobre cada una de ellas nos muestra los productos filtrados por categoría),la sección **Search**, que está en construcción y por último el *componente "Cartwidget* que se visualiza en todo momento.

En el *componente "ItemDetailContainer"* se hace el "llamado" del array de productos,los mismos serán filtrados uno por uno para luego visualizarse en el DOM a través del *componente "ItemDetail"*.


Cada "card" de productos tiene un *componente "Buttons"* con la descripción *Ver Detalles*,que al clickearlo nos muestra de forma dinámica los productos con su descripción, precio,fotografía y el *componente "ItemCount"*, que nos permitirá agregar al carrito (componente "CarWidget") el producto deseado (todo contenido en el *componente "ItemDetail"*) 


## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Available Scripts
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
