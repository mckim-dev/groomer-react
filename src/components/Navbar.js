import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import robinMckim_portLogotype from '../assets/robinMckim_portLogotype.svg';


const Navbar = ({ toggle }) => {
    return (
        <>
            <nav className="bg-[#78b8bc] flex justify-between items-center relative shadow-sm" role='navigation'>
                <Link className="pl-8 md:pl-16 lg:pl-30 xl:pl-48" to='/' >
                    <img src={robinMckim_portLogotype} className="logoWidth" alt="logo" />
                </Link>
                <div className="md:hidden px-6 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white hover:text-[#007890]" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="hidden md:flex md:items-center pr-8 md:pr-26 lg:pr-36 xl:pr-56">
                    <Link to='/schedule' className="navlinkStyle">
                        SCHEDULE
                    </Link>
                    <Link to='/appts' className="navlinkStyle">
                        APPOINTMENTS
                    </Link>
                    <Link to='/about' className="navlinkStyle">
                        ABOUT
                    </Link>
                    <Link to='/contact' className="navlinkStyle">
                        CONTACT
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;