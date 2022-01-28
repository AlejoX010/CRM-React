import { useState, useEffect } from 'react';
import Cliente from '../components/Cliente';
import Spinner from "../components/Spinner"


const Clientes = () => {

    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerClientesAPI = async () => {
            try {
                const url = 'http://localhost:4000/clientes'
                //Esta es la forma de enviar los datos del front al back
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error);
            }
            setCargando(!cargando)
        }

        obtenerClientesAPI()
    }, []);

    const handleEliminar = async (id) => {
        const confirmar = confirm('¿Deseas eliminar este cliente?')
        if (confirmar) {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                //Esta es la forma de enviar los datos del front al back
                const respuesta = await fetch(url, { method: 'DELETE' })
                await respuesta.json()

                const arrayClientes = clientes.filter(cliente => cliente.id !== id)
                setClientes(arrayClientes)
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        cargando ? <Spinner/> :
        <div>
            <h1 className='font-black text-4xl text-[#3D087B]'>Clientes</h1>
            <p className='mt-3'>Administra tus clientes</p>
            {clientes.length === 0 ?
                <h1 className='font-black text-4xl text-[#3D087B] mt-20'>No hay Clientes</h1>
                :
                <table className='w-full mt-5 table-auto shadow-lg bg-white'>
                    <thead className='bg-[#3F0071] text-white'>
                        <tr>
                            <th className='p-2'>Nombre</th>
                            <th className='p-2'>Contacto</th>
                            <th className='p-2'>Empresa</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cargando ?
                            <Spinner />
                            : (
                                <>
                                    {clientes.map((cliente) => (<Cliente key={cliente.id} cliente={cliente} handleEliminar={handleEliminar} />))}
                                </>
                            )}
                    </tbody>
                </table>

            }
        </div>
    );
}

export default Clientes;
