import '../styles/components/WifiSensing.scss';
import wifiGif from '../Assets/Gifs/KakaoTalk_20260606_024325958.gif';

function WifiSensing() {
    return (
        <section className="WifiSensing">
            <div className="wifi-inner">

                <div className="wifi-text">
                    <p className="section-label">WHAT IS WIFI SENSING?</p>

                    <h2>
                        보이지 않는 WiFi 신호로<br />
                        재배 공간의 변화를 감지합니다
                    </h2>

                    <p className="wifi-description">
                        WiFi Sensing은 송신기와 수신기 사이를 지나는 무선 신호의 변화를
                        분석하여 주변 환경의 상태를 추정하는 기술입니다. 페르세포네는 WiFi
                        CSI 데이터를 활용해 토양 수분량과 작물 생장 상태의 변화를 비접촉
                        방식으로 관찰합니다.
                    </p>

                    <div className="wifi-points">
                        <div>
                            <span>01</span>
                            <p>WiFi 신호가 재배 공간을 통과</p>
                        </div>

                        <div>
                            <span>02</span>
                            <p>토양과 작물 상태에 따라 CSI 변화 발생</p>
                        </div>

                        <div>
                            <span>03</span>
                            <p>변화 패턴을 분석하여 상태 추정</p>
                        </div>
                    </div>
                </div>

                <div className="wifi-visual">
                    <div className="visual-card">
                        <img src={wifiGif} alt="WiFi sensing visualization" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WifiSensing;