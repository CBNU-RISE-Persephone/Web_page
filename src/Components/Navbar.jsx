import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/components/Navbar.scss';

function Navbar(){
    // 햄버거 버튼 관련 useState
    const [isOpen, setIsOpen] = useState(false);

    // 스크롤 강조 효과 관련 - ActiveSection, useLocation
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    // 다른 페이지에서 navbar의 컴포넌트를 선택할 때, 맨 위로 가는 문제 해결(아마..?)
    const navigate = useNavigate();

    const moveToSection = (event, sectionId) => {
        event.preventDefault();
        setIsOpen(false);

        navigate('/', {
            state: { scrollTo: sectionId },
        });
    };

    // 스크롤 시 navbar 강조 효과
    useEffect(() => {
        const checkSection = () => {
            if(location.pathname !== '/'){
                setActiveSection('');
                return;
            }

            const teams = document.querySelector('#teams');
            const contact = document.querySelector('#contact');

            if(!teams || !contact){
                setActiveSection('');
                return;
            }

            const offset = 120;

            const teamsTop = teams.getBoundingClientRect().top;
            const teamsBottom = teams.getBoundingClientRect().bottom;
            const contactTop = contact.getBoundingClientRect().top;
            const contactBottom = contact.getBoundingClientRect().bottom;

            if(teamsTop <= offset && teamsBottom > offset){
                setActiveSection('teams');
            }
            else if(contactTop <= offset && contactBottom > offset){
                setActiveSection('contact');
            }
            else{
                setActiveSection('');
            }
        };

        checkSection();

        window.addEventListener('scroll', checkSection);
        window.addEventListener('resize', checkSection);

        return() => {
            window.removeEventListener('scroll', checkSection);
            window.removeEventListener('resize', checkSection);
        };
    }, [location.pathname]);

        
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
                    <a href="/#teams"
                    onClick={(event) => moveToSection(event, 'teams')}
                    className={activeSection === 'teams' ? 'active' : ''}>
                        Teams
                    </a>
                </li>

                <li>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                </li>

                <li>
                    <NavLink to="/data" onClick={() => setIsOpen(false)}>Data</NavLink>
                </li>

                <li>
                    <a href="/#contact"
                    onClick={(event) => moveToSection(event, 'contact')}
                    className={activeSection === 'contact' ? 'active' : ''}>Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;