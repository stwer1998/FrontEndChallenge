import { useNavigate, useParams } from "react-router-dom";
import { store } from "../redux/store";
import ErrorMsg from "./ErrorMsg";
import Loader from "./Loader";

function AlbumComponent() {
  const navigate = useNavigate();
  let params = useParams();
  let id: number;
  try {
    id = Number(params["*"]);
  } catch {
    return <ErrorMsg />;
  }

  const state = store.getState();

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <ErrorMsg />;
  }

  const album = state.data.find((x) => x.id === id);

  if (!album) {
    return <ErrorMsg />;
  }

  const BackHandler = () => {
    navigate("../", { replace: true });
  };

  return (
    <div className="content albumSrc">
      <div className="albumSrc-left">
        <img src={album.image} alt={album.title} />
      </div>
      <div className="albumSrc-right">
        <a href={album.link}>
          <p className="album__title">{album.name}</p>
        </a>
        <a href={album.artistLink}>
          <p>{album.artist}</p>
        </a>
        <a href={album.categotyLink}>
          <p className="album__category">{album.category}</p>
        </a>
        <p className="album__price">${album.price}</p>
        <p> Amount of songs: {album.amountSongs}</p>
        <p className="album__price">{album.release.toDateString()}</p>
        <p>{album.rights}</p>
        <button className="back-btn" onClick={BackHandler}>Go back</button>
      </div>
    </div>
  );
}

export default AlbumComponent;
