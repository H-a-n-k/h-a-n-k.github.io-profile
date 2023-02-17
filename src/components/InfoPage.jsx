import {educationIcon, githubIcon} from '../imgs';

const InfoPage = () => {
    return <div className="info page-content">
        <h2 className="white">HI! I'M</h2>
        <h2 className="name">Nguyễn Trung Hậu</h2>
        <h3 className="white">Applying for</h3>
        <h3 className="white">Web Developer Intern</h3>
        <hr />
        <div>
            <img src={educationIcon} alt="" className="icon" />
            <span>Junior at HUFLIT (Đại học Ngoại Ngữ Tin Học TP.HCM)</span>
        </div>
        <div>
            <img src={githubIcon} alt="" className="icon" />
            <b>Github: </b> <i><a href="https://google.com" target='_blank' rel="noreferrer">link.github.io</a></i>
        </div>
    </div>
}

export default InfoPage;