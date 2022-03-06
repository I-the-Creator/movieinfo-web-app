import React, { useEffect } from "react";

// import route to page
import routeMain from "./routes";
import MainMoviesList from "components/MainMoviesList";

//Redux
import { useDispatch, useSelector } from "react-redux"
import { loadQueryMovies } from "store/queryMovies/actions";
import { selectQueryMovies } from "store/queryMovies/selectors"

//Services
import  {getMoviesOnQuery} from "services/getMoviesOnQuery";

//Styles
import './styles.scss';

const MainPage: React.FC = (): JSX.Element => {

    const dispatch = useDispatch();
    const queryMoviesList = useSelector(selectQueryMovies)

    useEffect(() => {/*  */
        dispatch(loadQueryMovies(getMoviesOnQuery));
    }, [dispatch])

    return (
        <section className="main-page">
            <div className="main-page-title">
                <h1 className="title_main">MOVIESinfo</h1>
                <p className="title_minor">The most popular movie website</p>
            </div>
            {queryMoviesList.length > 0 && <MainMoviesList list={queryMoviesList.slice(0, 8)}/>}
        </section>
    )
}

export { routeMain };  // export route

export default MainPage;