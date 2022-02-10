import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { store } from '../redux/store';

function AlbumComponent() {
  const navigate = useNavigate();
  let params = useParams();
  const id:number = Number(params['*'])

  const state = store.getState();
  const x = state.data.find(x=>x.id===id);
  
  // useEffect(()=>{ //go back
  // navigate("../",{ replace: true })
  // })
  
  return (
    <div className="content">
    <li className="albums__album">
                <a href={`/album/${x!.id}`} className="album__link">
                    <div className="album__container">
                        <img src={x!.image} alt={x!.name}/>
                        <p className="album__title">{x!.title}</p>
                        <p className="album__category">{x!.category}</p>
                        <p className="album__price">${x!.price}</p>
                        <p className="album__price">{x!.release.toDateString()}</p>
                    </div>
                </a>
                </li>
    </div>
  );
}

export default AlbumComponent;
