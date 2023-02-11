
const label = ({name, img, reversed}) => { 
    return <div className={`name-label ${reversed?'reversed':''}`}>
        <div className="label">
            <img src={img} alt="" />
        </div>
        <div className="name">{name}</div>
    </div>
}

export default label;