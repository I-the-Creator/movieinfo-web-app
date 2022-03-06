import { IStore } from "./types";

export const selectQueryMovies = (state: {
  queryMoviesReducer: IStore;
}): IStore["list"] => state.queryMoviesReducer.list;
