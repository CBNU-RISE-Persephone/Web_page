import '../styles/pages/About.scss';

function About(){
    return(
        <div className="about-page">

            <section className="about-hero">
                <div>
                    <h1>About PERSEPHONE</h1>
                    <p>보이지 않는 무선 신호로 키우는 똑똑한 면(Area) 단위 스마트 농장</p>
                </div>
            </section>

            <div className="about-container">
                
                <section className="about-section introduction">
                    <h2>프로젝트 개요</h2>
                    <p>
                        최근 농업계는 기후 변화와 인구 감소에 따른 생산성 위기를 극복하고자 정보통신기술(ICT)을 
                        접목한 스마트팜을 적극 도입하고 있다. 그러나 기존 스마트팜에서 주로 사용되는 정전용량식 수분 
                        센서는 측정 범위가 국소적이며, 높은 초기 비용과 유지보수의 어려움으로 농가에 경제적 부담을 
                        초래하고 있다.  <br /><br />
                        
                        <a 
                            href="https://youtu.be/ELrY9C00sAU?si=OfD3gUzoLLq4xp2T" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="news-link"
                        >
                            KBS 뉴스
                        </a>에 따르면 실제 스마트팜을 운영 중인 농부 중 일부는 스마트팜 구축에 
                        들어가는 수십억원의 비용을 대출로 마련하고, 이로 인해 많은 어려움을 겪고있다. 이에 본 
                        프로젝트는 WiFi Sensing 기술을 활용한 새로운 모니터링 체계를 제안한다. 
                    </p>
                </section>

                <section className="about-section">
                    <h2>PERSEPHONE로 해결하고자 하는 문제</h2>
                    
                    <div>
                        <p>
                            페르세포네는 WiFi Sensing과 AI 분석 기술을 결합하여 기존 매립형·지점 중심 구조를 
                            비접촉·구역 중심 모니터링 체계로 전환한다. 이를 통해 최소한의 인프라로 광범위한 데이터를 
                            확보함으로써, 스마트팜의 경제적·기술적 문턱을 낮추고 지속 가능한 데이터 농업 생태계를 
                            구축하는 것을 목표로 한다.
                        </p>
                    </div>

                    <div>
                        <div>
                            <h3>01. 높은 초기 구축 비용</h3>
                            <p>정밀 관리를 위해 재배 라인별로 다수의 센서 배치가 필수적이며, 이는 중소규모 농가에 과도한 초기 자본 투입과 부채 부담을 강요합니다.</p>
                        </div>
                        <div>
                            <h3>02. 매립형 방식의 국소적 한계</h3>
                            <p>기존 센서는 꽂힌 지점(Point) 주변 수 cm 내외만 측정하므로, 재배 구역 전체를 대변하기 어렵고 불필요한 장비 중복 설치를 유발합니다.</p>
                        </div>
                        <div>
                            <h3>03. 운영 및 유지관리의 부담</h3>
                            <p>토양 매립형 센서는 노후화, 부식, 작물 교체 시 물리적 간섭이 발생하며 주기적인 보정과 교체 비용이 지속적으로 발생합니다.</p>
                        </div>
                        <div>
                            <h3>04. 데이터 농업의 양극화</h3>
                            <p>비용 부담으로 인해 대규모 자본 농가 중심으로만 정밀농업이 편중되어, 소규모 농가까지 기술적 혜택이 확산되지 못하고 있습니다.</p>
                        </div>
                    </div>
                </section>

                <section className="about-section vision">
                    <h2>우리의 비전</h2>
                    <div className="vision-box">
                        <p className="vision-quote">"농가의 경제적 부담은 덜고, 데이터의 밀도는 높인다"</p>
                        <p className="vision-desc">
                            흙을 파헤치고 센서를 꽂지 않아도 공간을 가득 채운 무선 신호로 농장을 관측합니다. 
                            우리는 값비싼 하드웨어 중심의 스마트팜 진입 장벽을 영리한 소프트웨어 기술로 극복하여, 
                            모든 농가가 제약 없이 데이터 기반의 정밀 농업을 누릴 수 있는 미래를 지향합니다.
                        </p>
                    </div>
                </section>

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
            </div>
        </div>
    );
}

export default About;