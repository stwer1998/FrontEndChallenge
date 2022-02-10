import { Dispatch } from "react";
import { Album } from "../types/Album";
import { AlbumActionType, AlbumActionTypeEnum } from "../types/AlbumActionType";
import { useTypeSelector } from "./reducers/albumReducer";
import { store } from "./store";

export const fetchAlbum = () => {
  return async (dispatch: Dispatch<AlbumActionType>) => {
    try {
      dispatch({ type: AlbumActionTypeEnum.fetch });
      const albums = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      )
        .then((x) => x.json())
        .then((x) => x.feed.entry.map((entry: any) => new Album(entry)));
      dispatch({ type: AlbumActionTypeEnum.success, payload: albums });
    } catch {
      dispatch({ type: AlbumActionTypeEnum.error, payload: "error" });
    }
  };
};

export const filterTitle = (filter: string) => {
  //return (dispatch: Dispatch<AlbumActionType>) => {
     const state = store.getState();
     state.filter.searchFilter = filter;
    // const filteredAlbums = state.albums.filter((x) => x.filter(filter));
    // dispatch({ type: AlbumActionTypeEnum.filter, payload: filteredAlbums });
    return filterAlbum;
  //};
};

export const filterCategory = (filter: string) => {
  const state = store.getState();
  state.filter.categoryFilter = filter;
  return filterAlbum;
  // return (dispatch: Dispatch<AlbumActionType>) => {
  //   //let filteredAlbums: Album[];
  //   const state = store.getState();
  //   if (filter) {
  //     filteredAlbums = state.albums.filter((x) => x.category === filter);
  //   } else {
  //     filteredAlbums = state.albums;
  //   }
  //   dispatch({ type: AlbumActionTypeEnum.filter, payload: filteredAlbums });
  // };
};

const filterAlbum=(dispatch: Dispatch<AlbumActionType>)=>{
  const state = store.getState();
  let filtered = state.data
  if(state.filter){
    if(state.filter.searchFilter){
      filtered = filtered.filter((x) => x.filter(state.filter!.searchFilter))
    }
    if(state.filter.categoryFilter){
      filtered = filtered.filter(x=>x.category === state.filter!.categoryFilter)
    }
  }
  return dispatch({ type: AlbumActionTypeEnum.filter, payload: filtered });
}
