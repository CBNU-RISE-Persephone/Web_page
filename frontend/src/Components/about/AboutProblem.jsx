import '../../styles/components/about/AboutProblem.scss'

function AboutProblem(){
    return(
        <section className="about-section problem-section">
            <div className='section-split reverse'>

                <div className='media-box image-box dummy-image'>
                    <p>임시 이미지 영역</p>
                </div>
                    
                <div className='text-box'>
                    <h2>PERSEPHONE로 해결하고자 하는 문제</h2>

                    <p>
                        페르세포네는 WiFi Sensing과 AI 분석 기술을 결합하여 기존 매립형·지점 중심 구조를 
                        비접촉·구역 중심 모니터링 체계로 전환한다. 이를 통해 최소한의 인프라로 광범위한 데이터를 
                        확보함으로써, 스마트팜의 경제적·기술적 문턱을 낮추고 지속 가능한 데이터 농업 생태계를 
                        구축하는 것을 목표로 한다.
                    </p>

                    <div className='problem-list'>
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
                </div>
            </div>
        </section>
    );
}

export default AboutProblem;