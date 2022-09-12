
import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import SectionUs from './component/SectionUs/SectionUs';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';


function App() {

return (
    <div className='container'>
      <NavBar/>
      <SectionUs  greeting="Bienvenidos a Whish Him" texto="E-commerce de regalos para ellos" />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
);
}

export default App;
