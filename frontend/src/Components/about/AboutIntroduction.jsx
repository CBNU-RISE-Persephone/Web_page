import '../../styles/components/about/AboutIntroduction.scss'

function AboutIntroduction(){
    return(
        <section className="about-section introduction">
            <h2>프로젝트 개요</h2>

            <div className='section-split'>
                <div className='media-box video-box'>
                    <iframe 
                        src="https://www.youtube.com/embed/ELrY9C00sAU" 
                        title='KBS 뉴스'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='text-box'>
                    <p> 최근 농업계는 기후 변화와 인구 감소에 따른 생산성 위기를 극복하고자 정보통신기술(ICT)을 
                        접목한 스마트팜을 적극 도입하고 있다. 그러나 기존 스마트팜에서 주로 사용되는 정전용량식 수분 
                        센서는 측정 범위가 국소적이며, 높은 초기 비용과 유지보수의 어려움으로 농가에 경제적 부담을 
                        초래하고 있다.
                    </p>
                    <p> KBS 뉴스에 따르면 실제 스마트팜을 운영 중인 농부 중 일부는 스마트팜 구축에 
                        들어가는 수십억원의 비용을 대출로 마련하고, 이로 인해 많은 어려움을 겪고있다. 이에 본 
                        프로젝트는 WiFi Sensing 기술을 활용한 새로운 모니터링 체계를 제안한다. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutIntroduction;