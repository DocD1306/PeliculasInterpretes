import './index.css'
import Contenedor from "./Contenedor.jsx";
import Interprete from "./InterpretePeli10.jsx";
import peliculas from "./data/peliculas.js";  

function App() {

  return (
    <>
        <h1 className="heading_h1 text-center pt-10 pb-5">Mis Intérpretes</h1>
        <Contenedor>
          {
            peliculas.flatMap(pelicula => 
              pelicula.actores.map(actor => (
                <Interprete 
                  key={actor.nombre}
                  nombre={actor.nombre} 
                  foto={actor.imagen}  // aquí el campo correcto
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </Interprete>
              ))
            )
          }
        </Contenedor>
    </>
  )
}

export default App
