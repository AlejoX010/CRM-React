import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Formulario from '../components/Formulario';
import Spinner from '../components/Spinner'

const Editarcliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

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
        <div>
            <h1 className='font-black text-4xl text-[#3D087B]'>Editar Cliente</h1>
            <p className='mt-3'>Actualiza los datos del cliente</p>
            {cargando ? <Spinner/>:
            Object.keys(cliente).length === 0 ? 
            <h1 className="uppercase text-4xl mb-10 text-[#3D087B] font-black mt-20 ">Cliente No Encontrado</h1>
            :(
            <Formulario cliente={cliente} />)}
            
        </div>
    );
}

export default Editarcliente;
