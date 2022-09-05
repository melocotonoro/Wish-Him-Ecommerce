
import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import SectionUs from './component/SectionUs/SectionUs';





function App() {
let imagen="lentes_Vulk.jpg"
let descripcion={
modelo:"Vulk VEILLE SBLK S10",
color:"Negro",
medidas: "Medidas: Calibre: 56mm Puente: 19mm Patilla: 140mm"
} 
  return (
    <div className='container'>
<NavBar/>

<SectionUs  greeting="Bienvenidos a Whish Him" texto="E-commerce de regalos para ellos" />
<ItemListContainer />
      <div className="app">
        <img className="lentes" alt='lentes'src={imagen}/>
      </div>
      <div className="textCard">
        <h1>Lentes de sol</h1>
        <b>{descripcion.modelo}</b>
        <p>{descripcion.color}</p>
        <p>{descripcion.medidas}</p>
      </div>
    </div>
  );
}

export default App;
