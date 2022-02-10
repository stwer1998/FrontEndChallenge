import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumComponent from "./Components/AlbumComponent";
import AlbumList from "./Components/AlbumList";
import { useTypeSelector } from "./redux/reducers/albumReducer";

const App: React.FC = () => {
  const state = useTypeSelector((state) => state);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<AlbumList />} path="/" />
          <Route element={<AlbumComponent />} path="/album/*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
