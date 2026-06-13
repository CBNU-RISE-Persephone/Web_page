import { useEffect, useState } from 'react';
import '../styles/components/Teams.scss';

import songImg from '../Assets/Images/teamImg/song_tae_yang.jpg';
import micImg from '../Assets/Images/teamImg/mickseogi.jpg';
import kimImg from '../Assets/Images/teamImg/kim_ji_seong.jpg';

function Teams() {
    const [teamMembers, setTeamMembers] = useState([]);

    const imageMap = {
        'song_tae_yang.jpg': songImg,
        'mickseogi.jpg': micImg,
        'kim_ji_seong.jpg': kimImg
    };

    useEffect(() => {
        fetch('https://api.demeter-persephone.cloud/api/team-members')
            .then((res) => res.json())
            .then((data) => setTeamMembers(data));
    }, []);

    function openGithub(url) {
        if (!url) return;

        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <section className="TeamsSection">
            <div className="teamsHeader">
                <span>OUR TEAM</span>
                <h2>함께 만드는 사람들</h2>
                <p>각 팀원을 선택하면 GitHub 프로필로 이동합니다.</p>
            </div>

            <div className="profileList">
                {teamMembers.map((member) => (
                    <button
                        className="profileItem"
                        key={member.id}
                        type="button"
                        onClick={() => openGithub(member.github_url)}
                    >
                        <div className="profileCircle">
                            <img
                                src={imageMap[member.image]}
                                alt={`${member.name} 프로필 이미지`}
                            />
                        </div>

                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </button>
                ))}
            </div>

            <div className="teamIntro">
                <div className="teamIntroText">
                    <span>배우고, 실험하고,
                        끝까지 탐구하는 팀</span>

                    <h3>
                        TEAM DEMETER
                    </h3>

                    <p>
                        데메테르는 WiFi Sensing 기술을 스마트팜에 적용하여, 기존 매립형 센서 중심의 관측 방식을 보완하기 위해 모인 팀입니다. 현재는 페르세포네 프로젝트를 중심으로 실험 환경 구축, CSI 데이터 수집, 기준 센서 비교, AI 모델 학습, 웹 기반 시각화 화면 구현을 진행하고 있습니다.
                    </p>

                    <p>
                        앞으로는 통제된 실험을 통해 토양 수분과 작물 상태에 따른 WiFi CSI 데이터 변화를 검증하고, 실제 스마트팜 환경으로 실증을 확장할 계획입니다. 사업화 단계에서는 일반 농가 직접 판매보다 B2B·B2G 협력을 우선하여, 스마트팜 기업·농업기술 기업·지자체·공공 실증 사업과 함께 기술 검증, 공동 개발, 기술 이전, 라이선스 공급으로 확장하고자 합니다.
                    </p>
                </div>

                <div className="teamIntroCards">
                    <div>
                        <strong>Performance</strong>
                        <p>
                            기준 센서 대비 95% 이상의 수분 추정 정확도 달성
                        </p>
                    </div>

                    <div>
                        <strong>Market Expansion</strong>
                        <p>
                            장기적으로 스마트팜 센서 시장 내 유의미한 점유율 확보
                        </p>
                    </div>

                    <div>
                        <strong>Collaboration</strong>
                        <p>
                            지자체, 농업기술센터, 스마트팜 기업과의 실증 협력 추진 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teams;