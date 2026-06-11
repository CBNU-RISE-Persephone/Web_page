import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/pages/Home.scss';
import demeterVideo from '../Assets/Videos/DEMETER.mp4';
import thumbImg from '../Assets/Images/thumb.png';

import Teams from '../Components/Teams';
import ContactUs from '../Components/ContactUs';
import WifiSensing from '../Components/WifiSensing';

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.scrollTo) return;

        const id = location.state.scrollTo;

        setTimeout(() => {
            const element = document.getElementById(id);
            if (!element) return;

            const navHeight = 100;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementTop - navHeight,
                behavior: 'smooth'
            });
        }, 100);
    }, [location.state]);

    return (
        <main className="Home">

            <section id="intro">
                <div className="img-section">

                    <div className="hero-text">
                        <p className="hero-label">WIFI SENSING SMART FARM</p>

                        <h1>PERSEPHONE</h1>

                        <p>
                            PERSEPHONE은 WiFi 신호가 재배 공간을 통과하며 발생하는
                            CSI 데이터의 진폭, 위상, 부반송파 변화를 분석하여 토양 수분량과
                            작물 생장 상태를 추정하는 비접촉 스마트팜 모니터링 프로젝트입니다.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/about">
                                <button>프로젝트 소개</button>
                            </Link>

                            <Link to="/data">
                                <button className="outline-btn">데이터 보기</button>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-video">
                        <video src={demeterVideo} poster={thumbImg} controls>
                            비디오 오류.
                        </video>
                    </div>

                </div>

                <div className="introduce-section">
                    <p className="section-label">WHY PERSEPHONE?</p>

                    <h2>와이파이 센싱 기반 스마트팜</h2>

                    <p className="sub-title">
                        페르세포네는 매립형 센서가 가진 국소 측정, 설치 비용, 유지관리 문제를
                        WiFi CSI 기반의 비접촉·구역 중심 모니터링 방식으로 보완합니다.
                    </p>

                    <div className="card-container">
                        <div className="card">
                            <div className="number">01</div>
                            <h3>WiFi Sensing</h3>
                            <p>
                                WiFi 신호가 토양과 작물 주변을 통과하며 발생하는 반사, 굴절,
                                감쇠 변화를 분석하여 재배 공간의 상태 변화를 감지합니다.
                            </p>
                        </div>

                        <div className="card">
                            <div className="number">02</div>
                            <h3>CSI Data Analysis</h3>
                            <p>
                                CSI 데이터의 진폭, 위상, 부반송파별 변화량을 시계열 데이터로
                                가공하고, 수분 변화와 생장 추이에 따른 패턴을 분석합니다.
                            </p>
                        </div>

                        <div className="card">
                            <div className="number">03</div>
                            <h3>Cost Efficiency</h3>
                            <p>
                                재배 구역마다 센서를 매립하는 기존 방식의 부담을 줄이고,
                                송수신 장치 기반의 구역형 모니터링으로 스마트팜 도입 비용을 낮춥니다.
                            </p>
                        </div>
                    </div>
                </div>

                <WifiSensing />

                <div className="message-section">
                    <div className="message-content">
                        <p className="section-label">FROM POINT TO AREA</p>

                        <h2>센서를 꽂는 농업에서, 공간을 읽는 농업으로</h2>

                        <p>
                            페르세포네는 기존의 지점 중심 토양 수분 측정 방식을 넘어,
                            WiFi 신호가 재배 공간을 통과하며 발생하는 CSI 변화를 분석합니다.
                            이를 통해 작물과 토양의 상태를 비접촉 방식으로 파악하고,
                            스마트팜의 구축 비용과 유지관리 부담을 줄이는 새로운 관측 방식을 제안합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section id="teams">
                <Teams />
            </section>

            <section id="contact">
                <ContactUs />
            </section>

        </main>
    );
}

export default Home;