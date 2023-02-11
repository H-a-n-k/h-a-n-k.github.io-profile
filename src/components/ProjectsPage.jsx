import note from '../imgs/note_5.png'

const ProjectsPage = ({ project }) => {
    const { name, type, src, desc, tech } = project;

    return <div className="page-content project">
        <div className="thumb">
            <img src={note} alt="" />
        </div>
        <div className="detail">
            <p><b>{name}</b></p>
            <p><i>{type}</i></p>
            <div><b>Description:</b> {desc}</div>
            <p><b>Source:</b> <i><a href="https://google.com" target='_blank' rel="noreferrer">{src}</a></i></p>
            <p><b>Technologies used:</b></p>
            <div className="techs">
                {tech.map((x, ind) => <div key={ind}>{x}</div>)}
            </div>
        </div>
    </div>
}

export default ProjectsPage