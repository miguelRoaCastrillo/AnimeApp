import axios from 'axios';
import * as React from 'react';
import CoverThumbnail from '../CoverThumbnail/CoverThumbnail';
import Search from '../Search/Search';
import { Link, useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core'
import './Home.css';

const SideBar = React.lazy(() => import('../SideBar/SideBar'))

const Home = () => {

    const [dataHome, setDataHome]= React.useState([]);
    const [page, setPage] = React.useState(1);
    const [numberResults, setNumberResults] = React.useState(12);
    const [searchName, setSearchName] = React.useState("");
    const [search, setSearchState] = React.useState("");

    const history = useHistory();    

    const handleText = (searchName) => {
        setSearchName(searchName);
        return searchName;       
    }

    const handleSearch = () => {        
        history.push(`/search/${searchName}`);        
    }

    const loadDataHome = async () => {
        await axios.get(`https://api.jikan.moe/v3/season/later`).then(response=>{
            console.log(response.data.anime);
            setDataHome(response.data.anime);
        }).catch(error=>{
            console.log("Exists a error to take the most recent anime to see in home: " + error);
        })
    }

    React.useEffect(()=>{
        loadDataHome();        
    }, []);

    React.useEffect(()=>{
        console.log("The text for search is: " + searchName);
    }, [searchName]);

    return (
        <div className="homeContainer">
            <div className="SideBarContainer">
                <Search 
                    handleText={handleText}
                    handleSearch={handleSearch}
                    text={searchName}
                />
                <React.Suspense fallback={<CircularProgress color="primary" size="60"/>}>
                    <SideBar
                        NumberResults={28}                        
                    />
                </React.Suspense>
            </div> 
            <div className="SeasonLater">
                <h3
                    style={{
                        fontWeight: '200'
                    }}                    
                    
                >
                    Most Recent
                </h3>
                <hr 
                    style={{
                        width: '95%'
                    }}
                />
                <div className="resultsHome">
                     {dataHome &&
                        dataHome.slice(0, 6).map(anime=>{
                            return( 
                                <div className="containerThumb">
                                    <Link to={`/anime/${anime.mal_id}`}>
                                        <CoverThumbnail
                                            imageUrl={anime.image_url}
                                            name={anime.title}
                                            type={anime.type}
                                        />    
                                    </Link>
                                </div>                                
                            )
                        })
                    }
                </div>                  
            </div>
        </div>
    );
}


export default Home;