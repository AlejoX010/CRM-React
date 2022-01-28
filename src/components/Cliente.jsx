import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cliente = ({ cliente, handleEliminar }) => {

    const { nombre, email, telefono, empresa, id } = cliente

    return (
        <tr className='border-b hover:bg-slate-200'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3 '><p><span className='text-gray-500 font-bold'>E-Mail: </span>{email}</p>{telefono !== '' ? <p><span className='text-gray-500 font-bold'>Telefono: </span>{telefono}</p> : null} </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <Link
                    className='block bg-[#2a6a6e] text-white text-center py-1 font-bold hover:bg-[#803bff] rounded-md' to={`/clientes/${id}`}>
                    <FontAwesomeIcon icon={faEye} /> Ver</Link>
                <Link
                    className='block bg-[#160040] text-white text-center m-auto px- py-1 my-2 font-bold hover:bg-[#360c83] rounded-md' to={`/clientes/editar/${id}`}><FontAwesomeIcon icon={faEdit} /> Editar</Link>
                <button
                    className='block w-full bg-[#630000] text-white m-auto px-2 py-1 font-bold hover:bg-[#9b0000] rounded-md' type='button' onClick={() => handleEliminar(id)} >
                    <FontAwesomeIcon icon={faTrashAlt} /> Eliminar</button>
            </td>
        </tr>
    );
}

export default Cliente;
