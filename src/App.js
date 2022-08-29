
import './App.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/navBar/NavBar';



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
<ItemListContainer greeting="Bienvenidos a Whish Him" texto="E-commerce de regalos para ellos" />
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
