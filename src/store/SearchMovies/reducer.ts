//types
import { IStore } from "./types";
import { AnyAction } from "redux";

const initialState = {
    list: [],
}

const searchMoviesReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'movies/setSearchMovies':
            return {...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default searchMoviesReducer;