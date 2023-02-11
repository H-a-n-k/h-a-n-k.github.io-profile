import {arrow} from '../imgs'

const Page = ({ children, page, n, flipped, handleClick, ind }) => { 
    
    const { tag, color, order, subInd, subN } = page;
    const PageOffset = 5;

    const getStyle = () => {
        let z = flipped ? n : n - ind;
        let x = order * PageOffset;

        return {
            '--bg': color,
            zIndex: z,
            transform: flipped ? `translate(${x + PageOffset}px,${x}px) rotateY(180deg)`
                : `translate(${x}px,${x}px)`,
        }
    }

    const getTagStyle = () => {     
        return {
            height: `calc(var(--pageHeight) * ${1/n})`,
            transform: `translate(calc(100% - 10px), ${100*order}%)`
        }
    }

    const handleChangePage = (p) => { 
        console.log('change page', subInd, subN, p);
        if ((subInd < 2 && p < 0) || (subInd >= subN && p > 0)) return;
        handleClick(ind + p);
    }

    return <div className={`page ${flipped?'hide-page':''}`} style={getStyle()}>
        {children}
        {tag &&
            <div className="tag" style={getTagStyle()} onClick={() => handleClick(ind)}>
                <div className="tag-content" style={flipped ? { transform: 'scale(1, -1)' } : {}}>{tag}</div>
            </div>
        }
        {
            subInd && subN > 1 &&
            <div className="pager">
                    <div className={`prev arrow ${subInd < 2 ? 'disable' : ''}`} onClick={() => handleChangePage(-1)} >
                        <img src={arrow} alt="" />
                    </div>
                    <div className="page-number"> {subInd} / {subN} </div>
                    <div className={`next arrow ${subInd >= subN ? 'disable' : ''}`} onClick={() => handleChangePage(1)} >
                        <img src={arrow} alt="" />
                    </div>
            </div>
        }
    </div>
}

export default Page;