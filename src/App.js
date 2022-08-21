
import './App.css';

function App() {
let imagen="lentes_Vulk.jpg"
let descripcion={
modelo:"Vulk VEILLE SBLK S10",
color:"Negro",
medidas: "Medidas: Calibre: 56mm Puente: 19mm Patilla: 140mm"
} 
  return (
    <div>
      <div className="App">
        <img className="lentes" alt='lentes'src={imagen}/>
      </div>
      <div className='App'>
        <h1>Lentes de sol</h1>
        <b>{descripcion.modelo}</b>
        <p>{descripcion.color}</p>
        <p>{descripcion.medidas}</p>
      </div>
    </div>
  );
}

export default App;