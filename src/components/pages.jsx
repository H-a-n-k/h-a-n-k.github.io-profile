import { useState } from "react";
import { Page } from '../components'
import getPages from "../data/pages";

const Pages = () => {
    const [page, setPage] = useState(0);

    

    const pages = getPages();

    const handleClick = (ind) => { 
        setPage(ind);
    }

    return <div className="pages">
        {pages.map((x, ind) => <Page key={ind} page={x} flipped={ind < page} ind={ind} n={pages.length} handleClick={handleClick}>
            {x.content}
        </Page>)}
    </div>
}

export default Pages;