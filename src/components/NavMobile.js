import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import robinMckim_portLogotype from '../assets/robinMckim_portLogotype.svg';

const NavMobile = ({ isShowing, toggle }) => {
    return (
        <div className={isShowing ? 'py-5' : 'hidden'} onClick={toggle}>

            <ul className="text-white bg-[#78b8bc] font-semibold">
                <li className="active">
                    <Link className="block text-sm px-2 py-4 text-white bg-[#78b8bc] font-semibold" to='/' ><img src={robinMckim_portLogotype} className="h-14" alt="logo" /></Link>
                </li>
                <li>
                    <Link className="navlinkStyle" to='/schedule' >SCHEDULE</Link>
                </li>
                <li>
                    <Link className="navlinkStyle" to='/appts' >APPOINTMENTS</Link>
                </li>
                <li>
                    <Link className="navlinkStyle" to='/about' >ABOUT</Link>
                </li>
                <li>
                    <Link className="navlinkStyle" to='/contact' >CONTACT</Link>
                </li>
            </ul>
        </div>

    )
}

export default NavMobile;