import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { store } from '../redux/store';

function AlbumComponent() {
  const navigate = useNavigate();
  let params = useParams();
  const id:number = Number(params['*'])

  const state = store.getState();
  const album = state.data.find(x=>x.id===id);

  const BackHandler = ()=>{
    navigate('../', {replace:true})
    
  }
  
  // useEffect(()=>{ //go back
  // navigate("../",{ replace: true })
  // })
  
  return (
    <div className="content">
      <button onClick={BackHandler}>Go back</button>
      <div className="albumSrc">
      <img src={album?.image} />
      <p className="album__title">{album!.title}</p>
                        <p className="album__category">{album!.category}</p>
                        <p className="album__price">${album!.price}</p>
                        <p className="album__price">{album!.release.toDateString()}</p>

      </div>
    </div>
  );
}

export default AlbumComponent;
