import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumComponent from "./Components/AlbumComponent";
import AlbumList from "./Components/AlbumList";
import { fetchAlbum } from "./redux/AlbumActionCreatoe";
import { useTypeSelector } from "./redux/reducers/albumReducer";

const App: React.FC = () => {
  const state = useTypeSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbum());
  }, []);
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<AlbumList />} path="/" />
          <Route element={<AlbumComponent />} path="/album/*" />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
