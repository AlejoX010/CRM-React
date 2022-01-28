import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Spinner from "../components/Spinner"

const Vercliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    const { nombre, email, telefono, empresa, nota } = cliente

    const { id } = useParams()

    useEffect(() => {
        const obtenerClientesAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                //Esta es la forma de enviar los datos del front al back
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error);
            }
            setCargando(!cargando)
        }

        obtenerClientesAPI()
    }, []);

    return (
        cargando ? <Spinner/> :
        Object.keys(cliente).length === 0 ? 
        <h1 className="uppercase text-4xl mb-10 text-[#3D087B] font-black ">Cliente No Encontrado</h1>
        :(
        <div>
            
            
           
                <>
                    <h1 className="uppercase text-4xl mb-10 text-[#3D087B] font-black ">{nombre}</h1>
                    <p className="uppercase font-bold text-2xl"><span className="text-gray-500 text-2xl font-black">Empresa: </span>{empresa}</p>
                    <p className="uppercase font-bold text-2xl"><span className="text-gray-500  text-2xl font-black">E-mail: </span>{email}</p>
                    {telefono !== '' ? <p className="uppercase font-bold text-2xl"><span className="text-gray-500  text-2xl font-black">Telefono: </span>{telefono}</p> : null}
                    {nota !== '' ? <p className="uppercase font-bold text-2xl"><span className="text-gray-500  text-2xl font-black">Nota: </span>{nota}</p> : null}
                    <Link to='/clientes'
                        className="inline-block px-5 py-3 mt-[1rem] rounded-full hover:bg-[#11052C] bg-[#3D087B] text-white">
                        <FontAwesomeIcon className="text-2xl" icon={faArrowLeft}/></Link>
                </>
            
        </div>
        )
    );
}

export default Vercliente;
