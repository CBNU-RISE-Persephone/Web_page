import '../../styles/components/about/AboutFeature.scss'

function AboutFeature(){
    return(
        <section className="about-section features">
            <h2>핵심 기술 및 특징</h2>
            <div className="feature-grid">
                <div className="feature-card">
                    <h3>📡 비접촉식 면(Area) 단위 관측</h3>
                    <p>토양에 전극을 묻지 않고, 송수신 장치 사이 공간을 통과하는 WiFi 무선 신호의 변화량(CSI)을 분석하여 넓은 구역 전체의 상태를 한 번에 파악합니다.</p>
                </div>

                <div className="feature-card">
                    <h3>🧠 딥러닝 기반 정밀 추정</h3>
                    <p>외부 간섭과 노이즈가 많은 무선 신호에서 시계열 딥러닝 모델(LSTM/GRU, CNN2D)을 활용하여 신호 패턴 속 토양 수분량과의 상관관계를 정확하게 도출합니다.</p>
                </div>

                <div className="feature-card">
                    <h3>🌱 작물 생육 상태 모니터링</h3>
                    <p>단순 수분 측정을 넘어 작물 성장에 따른 신호 회절 패턴을 학습하여, 지상부의 부피 변화와 생장 추이까지 추가 장비(카메라 등) 없이 간접 추정합니다.</p>
                </div>

                <div className="feature-card">
                    <h3>📉 획기적인 인프라 비용 절감</h3>
                    <p>수십 개의 매립형 센서 배치를 단 한 쌍의 저가형 WiFi 송수신 장치로 대체하여 스마트팜 초기 구축 및 유지보수 비용을 절반 이상 절감합니다.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutFeature;
