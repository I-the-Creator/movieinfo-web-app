import { IStore } from "./types";

export const selectSearchMovies = (state: {
  searchMoviesReducer: IStore;
}): IStore["list"] => state.searchMoviesReducer.list;
