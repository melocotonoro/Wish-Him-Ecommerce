
import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main/Main';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Cart from './component/Cart/Cart';
import Context from './component/CartContext/CartContex';
import Checkout from './component/checkout/Checkout';
import Page404 from './component/Page404/Page404';



function App() {

return (

 <Context>
    <BrowserRouter>
      <div className='container'>
        {/* Componente NavBar*/}
          <NavBar/>

          <Routes>

            {/* Componente contenedor  de ItemListContainer, SectionUs y Category*/}
            <Route exact path='/' element={<Main/>}/>
            {/* Componente contenedor  de ItemListContainer, SectionUs y Category*/}
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>

            {/* Componente contenedor de detalle del producto*/}
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>

            {/* Componente contenedor que muestra los productos seleccionados en el carrito*/}
            <Route exact path='/cart' element={<Cart/>}/>

            {/* Componente contenedor que muestra el formulario*/}
            <Route exact path='/checkout' element={<Checkout/>}/>

            {/* Componente de Página no encontrada*/}
            <Route path='*' element={<Page404/>}/>

          </Routes>  
      </div>
    
    </BrowserRouter>
  </Context>
);
}

export default App;
