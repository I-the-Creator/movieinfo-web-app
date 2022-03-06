//types
import { IStore } from "./types";
import { AnyAction } from "redux";

const initialState = {
    list: [],
}

const queryMoviesAllReducer = (state: IStore = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'movies/setQueryMoviesAll':
            return {...state, list: [...action.payload]}
        default:
            return state;
    }
}

export default queryMoviesAllReducer;