//types
import { IStore } from "./types";
import { AnyAction } from "redux";

const initialState = {
    list: [],
}

const queryMoviesReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'movies/setQueryMovies':
            return {...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default queryMoviesReducer;