import {Link} from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar(){
    return (
        <nav>
            <div>
                <Link to="/" className="mainLogo">DEMETER</Link>
            </div>

            <ul className="navList">
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/data">Data</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;