import '../styles/TeamDetails.scss'
import songImg from '../Assets/Images/teamImg/song_tae_yang.jpg'
import micImg from '../Assets/Images/teamImg/mickseogi.jpg'
import kimImg from '../Assets/Images/teamImg/kim_ji_seong.jpg'

function TeamDetails({ name, onClose }){
    let imgTitle;
    let profileName;

    if(name === 'song'){
        imgTitle = songImg;
        profileName = '송태양';
    }
    else if(name === 'mic'){
        imgTitle = micImg;
        profileName = '서민석';
    }
    else if(name === 'kim'){
        imgTitle = kimImg;
        profileName = '김지성';
    }
    // 어차피 넘겨줄 때, 저 셋중 하나긴한데 그냥 셋 다 분기로 빼고 싶어서 넣은 예외
    else{ imgTitle = null} 

    return(
        <div className='teamDetails outerBox'>

        <div className="infoBox">
            <div className='imgBox'>
                    <img src={imgTitle} alt='profileImg'></img>
            </div>
            <p>{ profileName }</p>
            <button className='closeBtn' onClick={onClose}>닫기</button>
        </div>

        </div>
    );
}

export default TeamDetails;