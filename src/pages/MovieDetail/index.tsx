import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";

//Services
import { getMovieById } from "services/getMoviesOnQuery";

// Import route to page
import routeMain from "./routes";

//Types
import { IID } from "types/IID";
import { IMovieDetail } from "types/IMovieDetail";

//Assets
import RatingStar from "assets/img/star.svg";
import NoImage from "assets/img/no_image.jpg";

//Utils
import datePrepare from "utils/datePrepare";

//Styles
import "./styles.scss";

const MovieDetail: React.FC = (): JSX.Element => {
  // get the id parameter from URL
  const { id } = useParams<IID>();

  const [movie, setMovie] = useState<IMovieDetail | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const genre: string | undefined = movie?.genres.join(", ");
  const language: string | undefined = movie?.language;

  useEffect(() => {
    getMovieById(id).then((response) => {
      const filteredMovieItem = response.data;
      setMovie(filteredMovieItem);
      setLoading(false);
    });
  }, [id]);

  return (
    <section className="movie-detail-page">
      {movie && (
        <>
          <div className="movie-detail-wrapper">
            <div className="movie-detail-image-wrapper">
              {movie.image ? (
                <img
                  className="movie-detail-image"
                  src={movie.image.medium}
                  alt=""
                />
              ) : (
                <img className="movie-detail-image" src={NoImage} alt="" />
              )}
            </div>
            <div className="movie-detail-info-wrapper">
              <div className="movie-detail-header">
                <h3>{movie.name}</h3>
                <div className="movie-detail-rating-wrapper">
                  <img className="rating-img" alt="star" src={RatingStar} />
                  <h3>{movie?.rating.average ? `${movie.rating.average}/10` : 'not rated'}</h3>
                </div>
              </div>
              <div className="movie-detail">
                <div className="movie-detail-properties">
                  <p>Released:</p>
                  <p>Language:</p>
                  <p>Genre:</p>
                  <p>Description:</p>
                </div>
                <div className="movie-detail-description">
                  {movie?.premiered ? (
                    <p>{datePrepare(movie.premiered).year}</p>
                  ) : (
                    <p>YAER</p>
                  )}

                  <p>{language}</p>
                  {movie.genres.length > 0 ? <p>{genre}</p> : <p>No genre</p>}
                  <Markup content={movie.summary} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export { routeMain };

export default MovieDetail;
