import React from 'react';
import { NavLink } from 'react-router-dom';

// Routes
import { routeMain as routeMainPage } from 'pages/MainPage';
import { routeMain as routeContacts } from 'pages/About';
import { routeMain as routeNewsList } from 'pages/CategoryListPage';
import { routeMain as routeSearch } from 'pages/Search';

//Assets
import MovieInfoLogo from 'assets/img/Logo.svg';

// Styles
import './styles.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <header className="main-header">
            <img className="logo" alt='logo' src={MovieInfoLogo}/>
            <nav>
                <NavLink to={routeMainPage} activeClassName={'link-active'}>
                    Main
                </NavLink>
                <NavLink to={routeNewsList} activeClassName={'link-active'}>
                    Movie by category
                </NavLink>
                <NavLink to={routeContacts} activeClassName={'link-active'}>
                    About us
                </NavLink>
                <NavLink to={routeSearch} activeClassName={'link-active'}>
                    Search
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;