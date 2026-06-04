import {Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import '../styles/components/Navbar.scss';

function Navbar(){
    // 햄버거 버튼 관련 useState
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div>
                <Link to="/" className="mainLogo" onClick={() => setIsOpen(false)}>DEMETER</Link>
            </div>

            <button className='menuBtn' onClick={() => setIsOpen(!isOpen)}>
                {isOpen? "×" : "≡"}
            </button>

            <ul className={"navList " + (isOpen ? "open" : "close")}>
                <li>
                    <NavLink to="/teams" onClick={() => setIsOpen(false)}>Teams</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/data" onClick={() => setIsOpen(false)}>Data</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;