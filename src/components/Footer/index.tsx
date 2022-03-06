import React from 'react';

//Assets
import MovieInfoLogo from 'assets/img/Logo.svg';

// Styles
import './styles.scss';

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="main-footer">
            <div className="footer-wrapper">
                <img className="logo" alt='logo' src={MovieInfoLogo}/>
                <div className='small-text'>The API generated Movie App</div>
                <div>
                    <div className="small-text">Made by</div>
                    Andrew Burlutski
                </div>
            </div>
        </footer>
    );
};

export default Footer;