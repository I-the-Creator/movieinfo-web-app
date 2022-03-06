//types
import { Dispatch } from "redux";
import { IStore } from "./types";
import { IMovie } from "types/IMovie";

export const setSearchMoviesAction = (list: IStore['list']) => {
    return {
        type: 'movies/setSearchMovies',
        payload: list
    }
}

export const loadSearchMovies = (callback: Function) => async (dispatch: Dispatch) => { 
    try {
        const response = await callback();
        const extractMovies = response.data.map((item: IMovie) => item.show)
        dispatch(setSearchMoviesAction(extractMovies))
        
    } catch (error) {
        console.log(error, 'Error loading news');
        
    }
}