import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';


const Layout = () => {

    const location = useLocation()

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-[#11052C] py-[2rem] text-center'>
                <h2 className='md:grid md:mb-[5rem] lg:inline text-center text-4xl text-[#fff]'><span className='font-black '>ADMIN</span>ClienteX</h2>

                <nav className='mt-[2rem] text-[#fff] text-2xl text-right '>

                    <Link to="/clientes"
                        className={`${location.pathname === '/clientes' ?
                            'text-[#ffffff] mb-5 block bg-[#3D087B] rounded-l-[5rem] pr-[1rem] ml-[5rem] lg:ml-[5rem] pt-[1rem] pb-[1rem] md:ml-0 '
                            :
                            'text-[#fff] block pt-[1rem] pb-[1rem] hover:text-[#818181]  pr-[1rem] mb-5'} `}>Clientes</Link>

                    <Link to="/clientes/nuevo"
                        className={`${location.pathname === '/clientes/nuevo' ?
                            'text-[#fff] mb-5 block bg-[#3D087B] pt-[1rem] pb-[1rem] rounded-l-[5rem] pr-[1rem] ml-[5rem] md:ml-0 lg:ml-[5rem]'
                            :
                            'text-[#fff] block hover:text-[#818181] mb-5 pt-[1rem] pb-[1rem]  pr-[1rem]'} `}>Nuevo Cliente</Link>
                </nav>
            </div>

            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
