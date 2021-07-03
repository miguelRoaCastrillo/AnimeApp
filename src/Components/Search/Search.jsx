import * as React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({handleText, handleSearch, searchName}) => {

    return(
        <div className="input-group nb-3 searchContainer">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Put something here..." 
                aria-label="Put something here..." 
                aria-describedby="basic-addon2" 
                onChange={(e)=>{handleText(e.target.value)}}
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={(e)=>{handleSearch()}}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

const { func, string } = PropTypes;

Search.propTypes = {
    handleText: func,
    handleSearch: func,
    searchName: string
}

export default Search;