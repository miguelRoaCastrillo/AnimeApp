import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import CoverThumbnail from '../CoverThumbnail/CoverThumbnail';
import SideBar from '../SideBar/SideBar';
import './SearchResult.css'

const SearchResult = () => {

    const { searchName } = useParams();

    const [dataSearch, setDataSearch] = React.useState([]);

    const loadData = async () => {
        await axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchName}`).then(response=>{
            setDataSearch(response.data.results);
            console.log(response.data.results);
        }).catch(error=>{
            console.log("There is an error for the search: " + error);
        });
    }

    React.useState(()=>{
        loadData();
    }, []);

    return(
        <div className="searchResultsContainer">
            <div className="row">
                <div className="col col-lg-5" style={{width: '35%'}}>
                    <SideBar 
                        NumberResults={44}
                    />
                </div>
                <div className="col">
                    <h3>
                        Results for: {searchName}
                    </h3>
                    <hr 
                        style={{width: '90%'}}
                    />
                    <div className="resultsSearch">
                        {dataSearch &&
                            dataSearch.slice(0, 9).map(results=>{
                                return( 
                                    <div className="containerThumb">
                                        <Link to={`/anime/${results.mal_id}`}>
                                            <CoverThumbnail
                                                imageUrl={results.image_url}
                                                name={results.title}
                                                type={results.type}
                                            />    
                                        </Link>
                                    </div>                                
                                )
                            })
                        }
                    </div>  
                </div>
            </div>
        </div>
    )

}

const { string } = PropTypes;

SearchResult.propTypes = {
    //
}

export default SearchResult;