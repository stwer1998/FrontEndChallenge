import React from "react";
import { store } from "../redux/store";
import AlbumListComponent from "./AlbumListComponent";
import ErrorMsg from "./ErrorMsg";
import Inputs from "./Inputs";
import Loader from "./Loader";

const AlbumList: React.FC = () => {
  const state = store.getState();
  // const { fetchAlbum, filter } = useActions();

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <ErrorMsg />;
  }

  return (
    <div className="content">
      <h1 className="title">Top albums</h1>
      <Inputs />
      <AlbumListComponent albums={state.albums} />
    </div>
  );
};

export default AlbumList;
