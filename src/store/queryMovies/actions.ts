//types
import { Dispatch } from "redux";
import { IStore } from "./types";
import { IMovie } from "types/IMovie";

export const setQueryMoviesAction = (list: IStore['list']) => {
    return {
        type: 'movies/setQueryMovies',
        payload: list
    }
}

export const loadQueryMovies = (callback: Function) => async (dispatch: Dispatch) => { 
    try {
        const response = await callback();
        const extractMovies = response.data.map((item: IMovie) => item.show)
        dispatch(setQueryMoviesAction(extractMovies))

    } catch (error) {
        console.log(error, 'Error loading news');
        
    }
}