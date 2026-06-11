import '../../styles/components/about/AboutVision.scss'

function AboutVision(){
    return(
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
    );
}

export default AboutVision;