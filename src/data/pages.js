import { htmlIcon, cssIcon, javascriptIcon, bootstrapIcon, dotnetIcon, nodeIcon, reactIcon } from '../imgs'
import { InfoPage, SkillsPage, ProjectsPage, SoftSkill, NameLabel } from '../components'
import lib from '../imgs/library.png'
import tl from '../imgs/tlmn.png'
import cake from '../imgs/cake.png'

const getPages = () => { 
    const projectsInfo = [
        {
            name: 'CARD GAME', type: 'personal project', src: 'https://github.com/H-a-n-k/h-a-n-k.github.io/tree/main/tlmn',
            desc: 'simple card games where you are all the players',
            tech: [
                <NameLabel name={'HTML'} img={htmlIcon} />,
                <NameLabel name={'CSS'} img={cssIcon} />,
                <NameLabel name={'Javascript'} img={javascriptIcon} />
            ],
            thumb: tl
        },
        {
            name: 'Library Management System', type: 'School project', src: 'https://github.com/H-a-n-k/LMS2',
            desc: 'Manage books, employees data. Display to user with searching, sorting, filtering funtionalities',
            tech: [
                <NameLabel name={'Node.js'} img={nodeIcon} />,
                <NameLabel name={'React.js'} img={reactIcon} /> 
            ],
            thumb: lib
        },
        {
            name: 'Bakery Project', type: 'School project', src: 'https://github.com/H-a-n-k/Bakery',
            desc: 'Typical E-Commerce site using .NET MVC pattern. Manage products display, cart, order, review,...',
            tech: [
                <NameLabel name={'ASP.NET MVC'} img={dotnetIcon} />,
                <NameLabel name={'Bootstrap'} img={bootstrapIcon} />,
                <NameLabel name={'Javascript'} img={javascriptIcon} />
            ],
            thumb: cake
        }
    ]

    const pages = [
        { order: 0, tag: 'INFO', content: <InfoPage />, color: 'var(--coverColor)' },
        { order: 1, tag: 'SKILLS', content: <SkillsPage />, color: '#F2D022' },
        { order: 2, tag: 'PROJECTS', content: <ProjectsPage project={projectsInfo[0]} />, color: '#F2E5A0', subN: 3, subInd: 1 },
        { order: 2, tag: '', content: <ProjectsPage project={projectsInfo[1]} />, color: '#F2E5A0', subN: 3, subInd: 2 },
        { order: 2, tag: '', content: <ProjectsPage project={projectsInfo[2]} />, color: '#F2E5A0', subN: 3, subInd: 3 },
        { order: 3, tag: 'SOFT SKILLS', content: <SoftSkill />, color: '#F29F05' }
    ]

    return pages;
}

export default getPages;