import '../styles/pages/Teams.scss'
import songImg from '../Assets/Images/teamImg/song_tae_yang.jpg'
import micImg from '../Assets/Images/teamImg/mickseogi.jpg'
import kimImg from '../Assets/Images/teamImg/kim_ji_seong.jpg'

function Teams(){
    return(
        <main className='TeamsPage'>

        <div className="headBox">
            <div className="innerTextBox">
                <h3>TEAMS</h3>
                <p>충북대학교 소프트웨어 학부생</p>
            </div>
        </div>

        {/* Todo: 각 버튼들(infoCard) onclick 및 함수 구현해야함.
            정보 띄우는 창은 별도 컴포넌트로 구현.
            +) 매우매우매우 나쁜 디자인. 민석이의 손을 좀 봐야할 듯 */}
            
        <div className='contentBox'>
            <button className='infoCard'>
                <div className='imgBox'>
                    <img src={songImg} alt='teamImg_01'></img>
                </div>
                <h3>송태양</h3>
            </button>

            <button className='infoCard'>
                <div className='imgBox'>
                    <img src={micImg} alt='teamImg_02'></img>
                </div>
                <h3>서민석</h3>
            </button>

            <button className='infoCard'>
                <div className='imgBox'>
                    <img src={kimImg} alt='teamImg_03'></img>
                </div>
                <h3>김지성</h3>
            </button>
        </div>

        </main>
    );
}

export default Teams;