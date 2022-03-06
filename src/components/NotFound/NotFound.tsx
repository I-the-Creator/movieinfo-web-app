import React from 'react';

import './styles.scss'

const NotFound: React.FC = (): JSX.Element => {
    return (
        <div className="not-found-wrapper">
            <h3 className="not-found-title">
                Enter the search term to display results
            </h3>
        </div>
    );
};

export default NotFound;