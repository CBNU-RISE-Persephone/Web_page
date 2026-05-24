import {Link, NavLink} from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar(){
    return (
        <nav>
            <div>
                <Link to="/" className="mainLogo">DEMETER</Link>
            </div>

            <ul className="navList">
                <li>
                    <NavLink to="/teams">Teams</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/data">Data</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;