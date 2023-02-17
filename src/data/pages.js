import { htmlIcon, cssIcon, javascriptIcon, bootstrapIcon, dotnetIcon } from '../imgs'
import { InfoPage, SkillsPage, ProjectsPage, SoftSkill, NameLabel } from '../components'

const getPages = () => { 
    const projectsInfo = [
        {
            name: 'CARD GAME', type: 'personal project', src: 'card-game.src',
            desc: 'simple card games where you are all the players',
            tech: [
                <NameLabel name={'HTML'} img={htmlIcon} />,
                <NameLabel name={'CSS'} img={cssIcon} />,
                <NameLabel name={'Javascript'} img={javascriptIcon} />
            ]
        },
        {
            name: 'JEWELRY SHOP', type: 'personal project', src: 'jewelry.src',
            desc: 'Typical E-commerce website displaying products, Cart, Accounts,...',
            tech: [
                <NameLabel name={'ASP.NET MVC'} img={dotnetIcon} />,
                <NameLabel name={'Bootstrap'} img={bootstrapIcon} /> ,
                <NameLabel name={'Javascript'} img={javascriptIcon} />
            ]
        },
        {
            name: 'BOOKSTORE MANAGEMENT', type: 'personal project', src: 'bookstore.src',
            desc: 'Manage products, sales, categories,... No client side',
            tech: [
                <NameLabel name={'ASP.NET MVC'} img={dotnetIcon} />,
                <NameLabel name={'Bootstrap'} img={bootstrapIcon} />,
                <NameLabel name={'Javascript'} img={javascriptIcon} />
            ]
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