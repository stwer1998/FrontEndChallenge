import { Album } from "./Album";

export enum AlbumActionTypeEnum {
  fetch = 1,
  success = 2,
  error = 3,
  filter = 4,
}

interface FilterAlbumAction {
  type: AlbumActionTypeEnum.filter;
  payload: Album[];
}

interface FetchAlbumAction {
  type: AlbumActionTypeEnum.fetch;
}

interface FetchAlbumSuccessAction {
  type: AlbumActionTypeEnum.success;
  payload: Album[];
}

interface FetchAlbumErrorAction {
  type: AlbumActionTypeEnum.error;
  payload: string;
}

export type AlbumActionType =
  | FetchAlbumAction
  | FetchAlbumSuccessAction
  | FetchAlbumErrorAction
  | FilterAlbumAction;
