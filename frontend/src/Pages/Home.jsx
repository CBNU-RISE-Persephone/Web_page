import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // 페이지 위치 기억(다른 페이지에서 home의 컴포넌트 위치로 올 떄)
import '../styles/pages/Home.scss'
import demeterVideo from '../Assets/Videos/DEMETER.mp4'

import Teams from '../Components/Teams';
import ContactUs from '../Components/ContactUs';

function Home(){
    // 페이지 위치 기억(다른 페이지에서 home의 컴포넌트 위치로 올 떄)
    const location = useLocation();

    useEffect(() => {
        if(!location.state?.scrollTo) return;

        const id = location.state.scrollTo;

        setTimeout(() => {
            const element = document.getElementById(id);
            if(!element) return;

            const navHeight = 100; // 대충 navbar 높이 추정해서 100으로 잡음. 추후 미세 조정 필요
            const elementTop = element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementTop - navHeight, // 스크롤되는 위치는 해당 요소 Top에서 네비게이션 바 높이 뻄
                behavior: 'smooth'
            });
        }, 100);
    }, [location.state]);

    return(
        <main className='Home'>

        <section id='intro'>
            <div className='img-section'>
                <h1><b>PERSEPHONE</b></h1>
                <p>WIFI Sensing 기술을 응용한 스마트팜</p>
            </div>

            <div className='video-section'>
                <video src={demeterVideo} controls>
                    비디오 오류.
                </video>
                <div className='text-content'>
                    <h2>DEMETER의 새로운 센서 기술</h2>
                    <p>영상을 통해 확인하세요!</p>
                </div>
                
            </div>

            <div className='introduce-section'>
                <h2>Why PERSEPHONE?</h2>
                <p className="sub-title">와이파이 센싱 기반 스마트팜의 핵심 강점</p>
    
                <div className='card-container'>
                    <div className='card'>
                        <div className='icon'>📡</div>
                        <h3>WIFI Sensing</h3>
                        <p>기존 센서의 한계를 뛰어넘는 비접촉식 감지 기술</p>
                    </div>
                    <div className='card'>
                        <div className='icon'>🌱</div>
                        <h3>Smart Automation</h3>
                        <p>데이터 기반의 정밀하고 스마트한 농장 제어 시스템</p>
                    </div>
                    <div className='card'>
                        <div className='icon'>📉</div>
                        <h3>Cost Efficiency</h3>
                        <p>설치 및 유지보수 비용의 혁신적인 절감 효과</p>
                    </div>
                </div>
            </div>


            <div className='cta-section'>
                <div className='cta-content'>
                    <h2>스마트한 농업의 미래, 지금 경험해보세요</h2>
                    <p>PERSEPHONE의 혁신적인 와이파이 센싱 기술을 더 자세히 알아볼 수 있습니다.</p>
                    
                    <Link to="/about">
                        <button className='cta-btn'>프로젝트 상세 정보 보기</button>
                    </Link>
                </div>
            </div>
        </section>

        <section id='teams'>
            <Teams></Teams>
        </section>

        <section id='contact'>
            <ContactUs></ContactUs>
        </section>
        </main>
    );
}

export default Home;
