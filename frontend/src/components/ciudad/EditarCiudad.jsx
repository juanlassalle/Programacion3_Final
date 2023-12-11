import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate,useParams} from "react-router-dom";

const URI = 'http://localhost:3001/ciudad/'

const EditarCiudad = () => {
    const [nombre,setNombre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const editar =async (e) => {
        e.preventeDefault()
        await axios.put(URI+id, {
            nombre: nombre
        })
        navigate('/ciudad')
    }

    useEffect( () => {
        obtenerCiudadId()
    },[])

    const obtenerCiudadId =async () => {
        const response = await axios.get(URI+id)

        setNombre(response.data.nombre)
    }

    return(
        <div>
            <h3>Editar Ciudad</h3>
            <form onSubmit={editar}>
            <div>
                <label htmlFor="">Nombre: </label>
                <input 
                    value={nombre}
                    type="text" 
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
        </div>
    )
}

export default EditarCiudad