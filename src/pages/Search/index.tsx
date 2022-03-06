import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Components
import CategoryMovieItem from "components/CategoryMoviesList/components/CategoryMovieItem";
import NotFound from "components/NotFound/NotFound";

//Services
import { getAllMoviesOnSearch } from "services/getMoviesOnQuery";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadSearchMovies } from "store/SearchMovies/actions";
import { selectSearchMovies } from "store/SearchMovies/selectors";

// Import route to page
import routeMain from "./routes";

//Types
import { IMovieDetail } from "types/IMovieDetail";

//Styles
import "./styles.scss";
import SearchInput from "components/SearchInput";

const MovieDetail: React.FC = (): JSX.Element => {

  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();
  const searchMoviesList = useSelector(selectSearchMovies);

  useEffect(() => {
    dispatch(loadSearchMovies(() => getAllMoviesOnSearch(search)));
  }, [dispatch, search]);

  return (
    <section className="search-page">
      <div className="search-wrapper">
        <h3 className="search-pointer">Category Search:</h3>
      </div>
      <SearchInput search={search} setSearch={setSearch} />
      {searchMoviesList.length > 0 ? (
        <>
          <h4 className="search-results-title ">Search results:</h4>
          <div className="search-items-list">
            {searchMoviesList.map((movie: IMovieDetail) => (
              <CategoryMovieItem key={uuidv4()} item={movie} />
            ))}
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export { routeMain };

export default MovieDetail;
