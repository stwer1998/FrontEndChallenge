import { match } from "assert";
import { Link } from "react-router-dom";
import { Album } from "../types/Album";

type AlbumListType={
    albums : Album[]
}

const AlbumListComponent:React.FC<AlbumListType> = ({albums}) =>{
    return(
        <ul className="albums list-reset" aria-label="List of top albums">
        {albums.map(x=>{
            return(<li key={x.id} className="albums__album">
                <Link to={`/album/${x.id}`} className="album__link">
                    <div className="album__container">
                        <img src={x.image} alt={x.name}/>
                        <p className="album__title">{x.title}</p>
                        <p className="album__category">{x.category}</p>
                        <p className="album__price">${x.price}</p>
                        <p className="album__price">{x.release.toDateString()}</p>
                    </div>
                </Link>
                </li>)
        })}
        </ul>
    )
}

export default AlbumListComponent;