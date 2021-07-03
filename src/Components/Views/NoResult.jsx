import * as React from 'react';
import './NoResult.css';

const NoResult = () => {
    return(
        <div className="containerNotFound">
            <div className="containerText">
                <h1>404</h1>
                <strong>Page not found</strong>
            </div>            
        </div>
    )
}

export default NoResult;