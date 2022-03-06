//types
import { Dispatch } from "redux";
import { IStore } from "./types";

export const setQueryMoviesAllAction = (list: IStore['list']) => {
    return {
        type: 'movies/setQueryMoviesAll',
        payload: list
    }
}

export const loadQueryMoviesAll = (callback: Function) => async (dispatch: Dispatch) => {
    try {
        const response = await callback();
        dispatch(setQueryMoviesAllAction(response.data))

    } catch (error) {
        console.log(error, 'Error loading news');
        
    }
}