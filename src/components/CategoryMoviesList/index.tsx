import React, { FC } from "react";
import CategoryMovieItem from "./components/CategoryMovieItem";

//TYPES
import { IMovieDetail } from "types/IMovieDetail";

//Styles
import "./styles.scss";

interface IMovieListsParams {
  list: IMovieDetail[];
}

const CategoryMoviesList: FC<IMovieListsParams> = ({ list }): JSX.Element  => (
  <div className="category-list">
    <div className="category-wrapper">
      <h3 className="genre-pointer">Chosen Category:</h3>
      <h3 className="genre">{list[2].genres.slice(0, 1)}</h3>
    </div>
    <div className="movie-items-list">
      {list.map((movie: IMovieDetail) => (
        <CategoryMovieItem key={movie.id} item={movie} />
      ))}
    </div>
  </div>
);

export default CategoryMoviesList;
