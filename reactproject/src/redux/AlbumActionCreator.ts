import { Dispatch } from "react";
import { Album } from "../types/Album";
import { AlbumActionType, AlbumActionTypeEnum } from "../types/AlbumActionType";
import { bypriseSort, byRealiseSort } from "../types/InitialState";
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
    } catch (e) {
      dispatch({ type: AlbumActionTypeEnum.error, payload: "error" });
    }
  };
};

export const filterTitle = (filter: string) => {
  const state = store.getState();
  state.filter.searchFilter = filter;
  return filterAlbum;
};

export const filterCategory = (filter: string) => {
  const state = store.getState();
  state.filter.categoryFilter = filter;
  return filterAlbum;
};

const filterAlbum = (dispatch: Dispatch<AlbumActionType>) => {
  const state = store.getState();
  let filtered = state.data;
  if (state.filter) {
    if (state.filter.searchFilter) {
      filtered = filtered.filter((x) => x.filter(state.filter!.searchFilter));
    }
    if (state.filter.categoryFilter) {
      filtered = filtered.filter(
        (x) => x.category === state.filter!.categoryFilter
      );
    }
  }
  //In order not to lose the sorting we do a re-sorting because the array has changed 
  dispatch({ type: AlbumActionTypeEnum.filter, payload: Sorter(filtered) });

};

export const sortByPrice = (sort: bypriseSort | null) => {
  const state = store.getState();
  state.sorts.byRelease = null;
  state.sorts.byPrice = sort;
  return sortAlbum;
};

export const sortByRealise = (sort: byRealiseSort | null) => {
  const state = store.getState();
  state.sorts.byPrice = null;
  state.sorts.byRelease = sort;
  return sortAlbum;
};

const sortAlbum = (dispatch: Dispatch<AlbumActionType>) => {
  const state = store.getState();
  return dispatch({ type: AlbumActionTypeEnum.filter, payload: Sorter(state.albums) });
};

function Sorter(albums: Album[]):Album[]{
  let filtered = albums.slice();
  const state = store.getState();
  if (state.sorts.byPrice) {
    filtered = filtered.sort((n1, n2) => (n1.price - n2.price));
    if (state.sorts.byPrice === bypriseSort.price_desc) {
      filtered = filtered.reverse();
    }
  }
  if (state.sorts.byRelease) {
    filtered = filtered.sort((a: Album, b: Album) => {
      return a.release.getTime() - b.release.getTime();
    });
    if (state.sorts.byRelease === byRealiseSort.release_desc) {
      filtered = filtered.reverse();
    }
  }
  return filtered
}
