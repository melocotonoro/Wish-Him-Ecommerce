import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/navBar/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import Main from './component/Main/Main';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Cart from './component/Cart/Cart';
import Context from './component/CartContext/CartContex';
import Checkout from './component/checkout/Checkout';
import Page404 from './component/Page404/Page404';
import Footer from './component/Footer/Footer';



function App() {

  return (

      <Context>
        <HashRouter>
          <div className='container'>
              <NavBar/>
              <Routes>
                {/* Componente contenedor  de ItemListContainer, SectionUs*/}
                <Route exact path='/' element={<Main/>}/>

                <Route exact path='/category/:id' element={<ItemListContainer/>}/>

                <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>

                <Route exact path='/cart' element={<Cart/>}/>

                <Route exact path='/checkout' element={<Checkout/>}/>

                <Route path='*' element={<Page404/>}/>

              </Routes> 
              <Footer/>
          </div>
        
        </HashRouter>
      </Context>
  );
}

export default App;
