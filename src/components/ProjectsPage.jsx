//import note from '../imgs/note_5.png'

const ProjectsPage = ({ project }) => {
    const { name, type, src, desc, tech, thumb } = project;

    return <div className="page-content project">
        <div className="thumb">
            <img src={thumb} alt="" />
        </div>
        <div className="detail">
            <p className='project-name'>{name}</p>
            <p><i>{type}</i></p>
            <div><b>Description:</b> {desc}</div>
            <p><b>Source:</b> <i><a href={src} target='_blank' rel="noreferrer">link</a></i></p>
            <p><b>Technologies used:</b></p>
            <div className="techs">
                {tech.map((x, ind) => <div key={ind}>{x}</div>)}
            </div>
        </div>
    </div>
}

export default ProjectsPage