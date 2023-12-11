import axios from "axios";
import { useState} from "react";
import { useNavigate,Link } from "react-router-dom";

const URI = 'http://localhost:3001/ciudad'

const CrearCiudad = () => {
    const [nombre,setNombre] = useState('')
    const navigate = useNavigate()

    const guardar = async(e) => {
        e.preventDefault()
        await axios.post(URI, {
            nombre: nombre
        })
        navigate('/ciudad')
    }

    return(
      <div>
        <h3>Crear Ciudad</h3>
        <form onSubmit={guardar}>
            <div>
                <label htmlFor="">Nombre: </label>
                <input 
                    type="text" 
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <button type="submit">Guardar</button>
            <Link to="/ciudad"></Link>
        </form>
      </div>
    )
}

export default CrearCiudad