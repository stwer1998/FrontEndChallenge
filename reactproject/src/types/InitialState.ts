import { Album } from "./Album";

interface filters {
    searchFilter:string,
    categoryFilter:string
}

interface sorts{
    byRelease:byRealiseSort|null,
    byPrice:bypriseSort|null
}

enum byRealiseSort{
    release_asc=1,
    release_desc=2
}

enum bypriseSort{
    price_asc=1,
    price_desc=2
}

export interface AlbumState{
    albums: Album[];
    data:Album[];
    loading:boolean;
    error:null|string;
    filter:filters;
    sorts:sorts;
}

const InitialStateFilter:filters = {
    categoryFilter : '',
    searchFilter : ''
}

const InitialStateSort:sorts = {
    byPrice : null,
    byRelease: null
}

export const AppinitialState:AlbumState = {
    albums: Array<Album>(),
    data: Array<Album>(),
    loading: false,
    error:  null,
    filter: InitialStateFilter,
    sorts:  InitialStateSort,
  }