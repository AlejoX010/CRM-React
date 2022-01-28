import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'


const Formulario = ({ cliente }) => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre:
            Yup.string().min(5, 'El nombre es muy corto').max(50, 'El nombre es muy largo').required('El Nombre del Cliente es Obligatorio'),

        empresa:
            Yup.string().required('La Empresa del Cliente es Obligatorio'),

        email:
            Yup.string().email('E-mail no valido').required('El E-Mail del Cliente es Obligatorio'),

        telefono:
            Yup.number().integer('Numero no valido').positive('Numero no valido')

    })

    const handleSubmit = async (valores) => {
        try {

            if (cliente.id) {
                const url = `http://localhost:4000/clientes/${cliente.id}`
                //Esta es la forma de enviar los datos del front al back
                const respuesta = await fetch(url, { method: 'PUT', body: JSON.stringify(valores), headers: { 'Content-Type': 'application/json' } })
                const resultado = await respuesta.json()

                navigate('/clientes')
            } else {
                const url = 'http://localhost:4000/clientes'
                //Esta es la forma de enviar los datos del front al back
                const respuesta = await fetch(url, { method: 'POST', body: JSON.stringify(valores), headers: { 'Content-Type': 'application/json' } })
                const resultado = await respuesta.json()

                navigate('/clientes')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-[#fff] mt-10 px-5 py-10 rounded-[1rem] shadow-md md:w-3/4 mx-auto'>

            <h1 className='text-[#150050] font-bold text-xl uppercase text-center'>{cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}</h1>

            <Formik
                initialValues={{
                    nombre: cliente?.nombre ?? '',
                    empresa: cliente?.empresa ?? '',
                    email: cliente?.email ?? '',
                    telefono: cliente?.telefono ?? '',
                    nota: cliente?.nota ?? ''
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => { await handleSubmit(values), resetForm() }}
                //Este es para las validaciones
                validationSchema={nuevoClienteSchema}
            >
                {({ errors, touched }) => {
                    // console.log(data);
                    return (
                        <Form className='mt-[2rem]'>
                            <Field name='nombre' type='text' placeholder='Nombre del cliente'
                                className='block w-full bg-[#dfdfdf] p-[.5rem] rounded-md mb-[1.5rem]'
                            />

                            {errors.nombre && touched.nombre ? (
                                <div className='bg-red-800 text-center text-[#fff] py-3 mb-[1.5rem] uppercase'>
                                    {errors.nombre}
                                </div>
                            ) : null}

                            <Field name='empresa' type='text' placeholder='Empresa del cliente'
                                className='block w-full bg-[#dfdfdf] p-[.5rem] rounded-md mb-[1.5rem]'
                            />

                            {errors.empresa && touched.empresa ? (
                                <div className='bg-red-800 text-center text-[#fff] py-3 mb-[1.5rem] uppercase'>
                                    {errors.empresa}
                                </div>
                            ) : null}

                            <Field name='email' type='email' placeholder='E-mail del cliente'
                                className='block w-full bg-[#dfdfdf] p-[.5rem] rounded-md mb-[1.5rem]'
                            />

                            {errors.email && touched.email ? (
                                <div className='bg-red-800 text-center text-[#fff] py-3 mb-[1.5rem] uppercase'>
                                    {errors.email}
                                </div>
                            ) : null}

                            <Field name='telefono' type='number' placeholder='Telefono del cliente'
                                className='block w-full bg-[#dfdfdf] p-[.5rem] rounded-md mb-[1.5rem]'
                            />

                            {errors.telefono && touched.telefono ? (
                                <div className='bg-red-800 text-center text-[#fff] py-3 mb-[1.5rem] uppercase'>
                                    {errors.telefono}
                                </div>
                            ) : null}

                            <Field name='nota' type='email' placeholder='Nota del cliente' as='textarea'
                                className='block w-full bg-[#dfdfdf] p-[.5rem] rounded-md mb-[1.5rem] h-40'
                            />

                            {errors.nota && touched.nota ? (
                                <div className='bg-red-800 text-center text-[#fff] py-3 mb-[1.5rem] uppercase'>
                                    {errors.nota}
                                </div>
                            ) : null}

                            <input type="submit" value={cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
                                className='bg-[#3D087B] p-3 rounded-md text-[#fff] transition delay-50 hover:bg-[#11052C] duration-500 w-full uppercase font-bold cursor-pointer'
                            />

                        </Form>
                    )
                }}
            </Formik>

        </div>
    );
}

Formulario.defaultProps = {
    cliente: {}
}

export default Formulario;
