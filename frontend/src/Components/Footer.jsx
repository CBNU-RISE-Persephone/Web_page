import '../styles/components/Footer.scss';


function Footer(){
    return(
        <footer className="footer">
        <div className="footer-content">
            <span className="footer-logo">DEMETER</span>
        
            <p className="copyright">
                &copy; {new Date().getFullYear()} DEMETER Team. Built for PERSEPHONE.
            </p>

            <a href="https://github.com/CBNU-RISE-Persephone/Web_page" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
            >
            GitHub
            </a>
        </div>
    </footer>
    );
}

export default Footer;