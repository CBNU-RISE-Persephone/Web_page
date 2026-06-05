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
        fetch('http://localhost:5000/api/team-members')
            .then((res) => res.json())
            .then((data) => {
                setTeamMembers(data);
            });
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
        </section>
    );
}

export default Teams;