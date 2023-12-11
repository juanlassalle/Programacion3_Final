import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate,useParams,useLocation} from "react-router-dom";

const URI = 'http://localhost:3001/ciudad/'

const EditarCiudad = () => {
    const {id} =useParams
    const [ciudad,setCiudad] = useState({
        nombre : ''
    })
    const navigate = useNavigate()
    const location = useLocation()
    
    const userId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setCiudad((prev)=> ({...prev, [e.target.value]: e.target.value}))
    }
    useEffect( () =>{
        axios.get(URI+id)
        .then(res => {
            setCiudad(res.data[0])
        })
        .catch(error => console.log(error))
    }, []);

    
    const handleClick = async(e) =>{
        e.preventDefault()

        try {
            await axios.put(`${URI}/${userId}`,ciudad)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
   
    

    return(
        <div>
                
            <h3>Editar Ciudad</h3>
            <form>
                <div>
                    <label htmlFor="id">Nombre: </label>
                    <input 
                        type="text" 
                        id="id"
                        value={id}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input 
                        type="text" 
                        id="nombre"
                        value={ciudad.nombre}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleClick}>Editar</button>
            </form>
        
        </div>
    )
}

export default EditarCiudad