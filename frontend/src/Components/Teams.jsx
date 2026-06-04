import '../styles/components/Teams.scss';

import songImg from '../Assets/Images/teamImg/song_tae_yang.jpg';
import micImg from '../Assets/Images/teamImg/mickseogi.jpg';
import kimImg from '../Assets/Images/teamImg/kim_ji_seong.jpg';

function Teams() {
    const teamMembers = [
        {
            id: 'song',
            name: '송태양',
            role: 'System / Web Developer',
            image: songImg,
            githubUrl: 'https://github.com/taeyang03'
        },
        {
            id: 'mic',
            name: '서민석',
            role: 'Frontend Developer',
            image: micImg,
            githubUrl: 'https://github.com/mickseogi'
        },
        {
            id: 'kim',
            name: '김지성',
            role: 'Backend Developer',
            image: kimImg,
            githubUrl: 'https://github.com/BoldFreak06'
        }
    ];

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
                        onClick={() => openGithub(member.githubUrl)}
                    >
                        <div className="profileCircle">
                            <img src={member.image} alt={`${member.name} 프로필 이미지`} />
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