import React from 'react';
import MainMovieItem from './components/MainMovieItem';

//TYPES
import { IMovieDetail } from 'types/IMovieDetail';

//Styles
import './styles.scss';

interface IMovieListsParams {
    list: IMovieDetail[];
}

const MainMoviesList: React.FC<IMovieListsParams> = ({ list }): JSX.Element  => (
    <div className="movies-list">
        {list.map((movie: IMovieDetail, _i: number) => (
                <MainMovieItem key={movie.id} item={movie} />
        ))}
    </div>
);

export default MainMoviesList;