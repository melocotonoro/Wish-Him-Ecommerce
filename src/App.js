
import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './component/CartWidget/CartWidget ';
import Main from './component/Main/Main';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';


function App() {

return (
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

          <Route exact path='/cart' element={<CartWidget/>}/>
          </Routes>  
    </div>
  
  </BrowserRouter>

);
}

export default App;
