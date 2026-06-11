// component
import AboutFeature from '../Components/about/AboutFeature.jsx';
import AboutHero from '../Components/about/AboutHero.jsx';
import AboutIntroduction from '../Components/about/AboutIntroduction.jsx';
import AboutProblem from '../Components/about/AboutProblem.jsx';
import AboutVision from '../Components/about/AboutVision.jsx';

// Style
import '../styles/pages/About.scss';

// About 페이지에 내용을 추가할 경우, 직접적으로 추가하지 말고 About 하위에 컴포넌트 및 스타일 생성 후 추가
function About(){
    return(
        <div className="about-page">

            <AboutHero />

            <div className="about-container">
                
                <AboutIntroduction />

                <AboutProblem />

                <AboutVision />

                <AboutFeature />

            </div>
        </div>
    );
}

export default About;