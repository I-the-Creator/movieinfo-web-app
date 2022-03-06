import React from "react";
import { NavLink } from "react-router-dom";

//Route to newsDetail
import { routeMain as routeNewsDetail } from "pages/MovieDetail";

//TYPES
// import { IMovieDetail } from 'types/IMovieDetail';
import { IMovieDetail } from "types/IMovieDetail";

//Utils
import datePrepare from "utils/datePrepare";

//Assets
import NoImage from "assets/img/no_image.jpg";

//Styles
import "./styles.scss";

interface IMovieItemParams {
  item: IMovieDetail;
}

const MainMovieItem: React.FC<IMovieItemParams> = ({ item }) => {
  const { year } = datePrepare(item.premiered);
  const genre: string = item.genres.join(", ");
  const language: string = item.language;

  return (
    <NavLink className="movie-item" to={routeNewsDetail(item.id)}>
      {" "}
      {/* _id parameter add to URL */}
      <div className="image-wrapper">
        <img className="movie-image" src={item.image ? item.image.medium : NoImage} alt="" />
      </div>
      <div className="bottom-wrapper">
        <p className="title">{item.name}</p>
        <p className="issue-date">
          {year} {language}
        </p>
        <p className="genre">{item.genres.length > 0 ? genre : 'No genre'}</p>
      </div>
    </NavLink>
  );
};

export default MainMovieItem;
