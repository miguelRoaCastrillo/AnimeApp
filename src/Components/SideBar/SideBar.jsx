import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = ({NumberResults}) => {

    const [data, setData] = React.useState([]);
    const key = 0;

    const loadData = async () => {
        await axios.get(`https://api.jikan.moe/v3/genre/${'anime'}/${1}/${1}`).then(response=>{
            setData(response.data.anime);
            console.log(response.data.anime);
        }).catch(error=>{
            console.log("Error in taking the data for the sideBar" + error);
        })        
    }

    React.useEffect(()=>{
        loadData();
    }, [])

    return(
        <div className="SideBar">
            <div className="containerTitle">
                <h3 className="title">
                    Popular Series
                </h3>
                <hr 
                    style={{
                        border: '1px solid #411777',
                        width: '30%',
                        margin: 'auto auto 10px auto'
                    }}
                />                
                <div className="containerPopularSeries">
                    <ul>
                        {data &&
                            data.slice(0, NumberResults).map(anime=>(
                                anime.mal_id &&                                                                        
                                    <li 
                                        key={anime.mal_id.toString()}
                                        style={{
                                            color: '#411777',
                                            margin: '8.2px 0 8.2px 0'
                                        }}  
                                        
                                    >
                                        <strong 
                                            style={{
                                                color: '#3F3F3F'
                                            }}
                                        >
                                            <Link 
                                                to={`/anime/${anime.mal_id}`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#2F2F2F'
                                                }}
                                            >
                                                {anime.title}
                                            </Link>                                        
                                        </strong> 
                                        {anime.genres &&
                                            anime.genres.slice(0,1).map(genres=>(
                                                <span 
                                                    style={{
                                                        marginLeft: '10px',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {genres.name}
                                                </span>
                                            ))
                                        }
                                    </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const { number } = PropTypes;

SideBar.propTypes = {
    NumberResults: number
}

export default SideBar;