import MostrarCiudad from "./ciudad/MostrarCiudad"
import CrearCiudad from "./ciudad/CrearCiudad"
import EditarCiudad from "./ciudad/EditarCiudad"
const Ciudad = () => {
  return (
    <div className="flex justify-center">
        <MostrarCiudad/>
        <CrearCiudad/>
        <EditarCiudad/>
    </div>
  )
}


export default  Ciudad