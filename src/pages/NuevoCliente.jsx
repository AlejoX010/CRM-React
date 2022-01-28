import Formulario from '../components/Formulario';

const Nuevocliente = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-[#3D087B]'>Nuevo Cliente</h1>
            <p className='mt-3'>Llena los siguientes campos para registrar un cliente</p>
            <Formulario/>
        </div>
    );
}

export default Nuevocliente;
