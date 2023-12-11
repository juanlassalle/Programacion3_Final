import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const URI = 'http://localhost:3001/ciudad'

const MostrarCiudad = () => {

    const [ciudades, setCiudades] = useState([])

    useEffect(() => {
        getCiudades()
    },[])

    const getCiudades = async() =>{
        const response = await axios.get(URI)
        setCiudades(response.data)
    }

    const deleteCiudad =async(id) => {
        await axios.delete(`${URI}/${id}`)
        getCiudades()
    }

    return(
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Nombre Ciudad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ciudades.map((ciudad) =>( 
                        <tr key={ciudad.id}>
                            <td> {ciudad.nombre} </td>
                            <td>
                                <Link className='mt-4 mb-4 rounded-md' to={`/ciudad/${ciudad.id}`}>Editar</Link>
                                <button className='mt-4 mb-4 rounded-md' onClick={() => deleteCiudad(ciudad.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}

export default MostrarCiudad