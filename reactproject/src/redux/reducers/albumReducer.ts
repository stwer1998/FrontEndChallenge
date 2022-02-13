import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Album } from "../../types/Album";
import {
  AlbumActionType,
  AlbumActionTypeEnum,
} from "../../types/AlbumActionType";
import { AlbumState, AppinitialState } from "../../types/InitialState";

export const AlbumReducer = (
  state = AppinitialState,
  action: AlbumActionType
): AlbumState => {
  switch (action.type) {
    case AlbumActionTypeEnum.fetch:
      return {
        ...state,
        loading: true,
        error: null,
        albums: Array<Album>(),
        data: Array<Album>(),
      };
    case AlbumActionTypeEnum.success:
      return {
        ...state,
        loading: false,
        error: null,
        albums: action.payload,
        data: action.payload,
      };
    case AlbumActionTypeEnum.error:
      return {
        ...state,
        loading: false,
        error: action.payload,
        albums: Array<Album>(),
        data: Array<Album>(),
      };
    case AlbumActionTypeEnum.filter:
      return {
        ...state,
        loading: false,
        error: null,
        albums: action.payload,
      };
    default:
      return state;
  }
};

export type Albumreducer = ReturnType<typeof AlbumReducer>;
export const useTypeSelector: TypedUseSelectorHook<Albumreducer> = useSelector;
