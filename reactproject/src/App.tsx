import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumList from "./Components/AlbumList";
import Inputs from "./Components/Inputs";
import ErrorMsg from "./ErrorMsg";
import Loader from "./Loader";
import { fetchAlbum } from "./redux/AlbumActionCreatoe";
import { useTypeSelector } from "./redux/reducers/albumReducer";

// function App() {
//   useEffect(()=>{
//     fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
//     .then(x=>x.json())
//     .then(x=>x.feed.entry.map((entry: any)=>new Album(entry)))
//     .then(x=>console.log(x))
//   }, [])

const App: React.FC = () => {
  const state = useTypeSelector((state) => state);
  // const { fetchAlbum, filter } = useActions();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbum());
  }, []);

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <ErrorMsg />;
  }

  //console.log(state);
  //if(state.data.length>1){
    //dispatch(filter('pop'));
  //}

  return (
    <div className="content">
      <h1 className="title">Top albums</h1>
      <Inputs />
      <AlbumList albums={state.albums} />
    </div>
  );
};

export default App;
