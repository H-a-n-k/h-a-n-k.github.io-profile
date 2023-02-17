import { nodeIcon, mongodbIcon, sqlserverIcon,
     mysqlIcon, reactIcon, htmlIcon,
    cssIcon, javascriptIcon, bootstrapIcon, dotnetIcon } from '../imgs'
import NameLabel  from './nameLabel'

const backEndSkills = [
    { name: 'Node.js (Express)', img: nodeIcon }, { name: 'ASP.NET MVC', img: dotnetIcon }, { name: 'SQLServer', img: sqlserverIcon },
    { name: 'MySQL', img: mysqlIcon }, { name: 'MongoDB', img: mongodbIcon }
]

const frontEndSkills = [
    { name: 'React.js', img: reactIcon }, { name: 'HTML', img: htmlIcon }, { name: 'CSS (LESS/SCSS)', img: cssIcon },
    { name: 'Javascript (Jquery)', img: javascriptIcon }, { name: 'Bootstrap', img: bootstrapIcon }
]

const SkillsPage = () => {
    return <div className="skill page-content">
        <div className="back-end end">
            <div className="title">BACK-END</div>
            <div className="content">
                {backEndSkills.map(x => <div className='item' key={x.name}><NameLabel name={x.name} img={x.img}/></div>)}
            </div>
        </div>
        <div className="note-wrap">
            <div className="front-end end">
                <div className="title">FRONT-END</div>
                <div className="content">
                    {frontEndSkills.map(x => <div className='item' key={x.name}><NameLabel name={x.name} img={x.img} reversed /></div>)}
                </div>
            </div>
        </div>
    </div>
}

export default SkillsPage;