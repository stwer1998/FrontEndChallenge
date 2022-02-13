import { Link } from "react-router-dom";
import { Album } from "../types/Album";

type AlbumListType = {
  albums: Album[];
};

const AlbumListComponent: React.FC<AlbumListType> = ({ albums }) => {
  return (
    <ul className="albums list-reset" aria-label="List of top albums">
      {albums.map((x) => {
        return (
          <li key={x.id} className="albums__album">
            <div className="album__container">
              <img src={x.image} alt={x.name} />
              <p className="album__title">{x.title}</p>
              <p className="album__category">{x.category}</p>
              <p className="album__desc">${x.price}</p>
              <p className="album__desc">{x.release.toLocaleDateString()}</p>
              <a
                className="album__desc album_link"
                href={x.link}
                target="_blank"
                rel="noreferrer"
              >
                Go to album
              </a>
              <Link to={`/album/${x.id}`} className="album__desc album_link">
                More ...
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumListComponent;
