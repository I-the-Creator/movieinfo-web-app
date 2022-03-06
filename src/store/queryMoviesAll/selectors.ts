import { IStore } from "./types";

export const selectQueryMoviesAll = (state: {
  queryMoviesAllReducer: IStore;
}): IStore["list"] => state.queryMoviesAllReducer.list;
