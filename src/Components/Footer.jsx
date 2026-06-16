import { useState } from 'react';
import '../styles/components/Footer.scss';


function Footer(){
    /** 어드민 폼? 암튼 로그인 **/
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // 폼 열고닫기
    const openAdminModal = () => {
        setLoginError('');
        setIsAdminModalOpen(true);
    };

    const closeAdminModal = () => {
        setLoginError('');
        setIsAdminModalOpen(false);

        setUsername('');
        setPassword('');
    };

    const handleAdminLogin = async(event) => {
        event.preventDefault();

        try{
            const response = await fetch('/api/admin/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if(!response.ok){
                setLoginError('아이디 또는 비밀번호가 맞지 않습니다.');
                return;
            }

            closeAdminModal();

            //임시로 페이지 연동(존재하진 않음 아직)
            window.location.href = '/admin'; // <- 요거
        }
        catch(error){ setLoginError('* 연결에 실패하였습니다.'); }
    };

    return(
        <footer className="footer">
        <div className="footer-content">
            <span className="footer-logo">DEMETER</span>
        
            <p className="copyright">
                &copy; {new Date().getFullYear()} DEMETER Team. Built for PERSEPHONE.
            </p>

            <div className='footer-actions'>
                
                <a href="https://github.com/CBNU-RISE-Persephone/Web_page" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                >
                GitHub
                </a>

                <button type="button" className='footer-link admin-button' onClick={openAdminModal}>
                    Admin
                </button>

            </div>
        </div>

        {isAdminModalOpen && (
            <div className='admin-modal-backdrop' onClick={closeAdminModal}>
                <div className='admin-modal' onClick={(event) => event.stopPropagation()}>
                    
                    <button
                        type='button'
                        className='admin-modal-close'
                        onClick={closeAdminModal}
                        >
                            &times;
                    </button>

                    <h2>Admin Login</h2>

                    <form className='admin-login-form' onSubmit={handleAdminLogin}>
                        
                        <label htmlFor='admin-username'>Username</label>
                        <input
                            id="admin-username"
                            type='text'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            autoComplete='username'
                            required
                        ></input>

                        <label htmlFor='admin-password'>Password</label>
                        <input
                            id="admin-password"
                            type='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete='current-password'
                            required
                        ></input>

                        {loginError && (
                            <p className='admin-login-error'>{loginError}</p>
                        )}

                        <button type='submit' className='admin-login-submit'>
                            Login
                        </button>
                    </form>
                </div>

            </div>
        )}
    </footer>
    );
}

export default Footer;