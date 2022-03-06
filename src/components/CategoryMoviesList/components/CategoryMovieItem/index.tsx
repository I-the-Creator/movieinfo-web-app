import { FC } from "react";
import { NavLink } from "react-router-dom";

//Route to newsDetail
import { routeMain as routeMovieDetail } from "pages/MovieDetail";

//TYPES
import { IMovieDetail } from "types/IMovieDetail";

//Assets
import NoImage from "assets/img/no_image.jpg";

//Styles
import "./styles.scss";

interface IMovieItemParams {
  item: IMovieDetail;
}

const CategoryMovieItem: FC<IMovieItemParams> = ({ item }) => {
  const genre = item.genres.join(", ");

  return (
    <NavLink className="category-movie-item" to={routeMovieDetail(item.id)}>
      {/* _id parameter add to URL */}
      <div className="image-wrapper">
        <img className="movie-image" src={item.image ? item.image.medium : NoImage} alt="" />
      </div>
      <div className="bottom-wrapper">
        <p className="title">{item.name}</p>
        <p className="genre">{item.genres.length > 0 ? genre: 'No genre'}</p>
      </div>
    </NavLink>
  );
};

export default CategoryMovieItem;
