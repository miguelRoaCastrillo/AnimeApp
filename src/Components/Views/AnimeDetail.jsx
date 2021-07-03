import * as React from 'react';
import axios from 'axios';
import SideBar from '../SideBar/SideBar';
import Search from '../Search/Search';
import { useParams, useHistory } from 'react-router-dom';
import './AnimeDetail.css';

const AnimeDetal = () => {

    const [dataAnime, setDataAnime] = React.useState([]);
    const [searchName, setSearchName] = React.useState("");

    const {id} = useParams();

    const history = useHistory();    

    const handleText = (searchName) => {
        setSearchName(searchName);
        return searchName;       
    }

    const handleSearch = () => {        
        history.push(`/search/${searchName}`);        
    }

    const loadData = async (paramId) => {
        await axios.get(`https://api.jikan.moe/v3/anime/${id}`).then(response=>{
            setDataAnime(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(`There is a error from the server with the anime id: ${id}`);
        })
    }

    React.useEffect(()=>{
        loadData();
        console.log("The id of the anime serie is: " + id);        
    }, []);

    return(
        <div className="animeDetailContainer">
            <div className="container row">
                <div className="col">
                    <Search 
                        handleText={handleText}
                        handleSearch={handleSearch}
                        text={searchName}
                    />
                    <SideBar
                        NumberResults={24}
                    />
                </div>
                <div className="col">
                    <div className="container imageContainer">
                        {dataAnime.image_url &&
                            <img loading="lazy" src={dataAnime.image_url} alt="" className={"animeCover"}/>                        
                        }
                    </div>                    
                    {dataAnime.title &&
                        <h1>{dataAnime.title}</h1>                                              
                    }
                    {dataAnime.title_japanese && 
                        <p className="japanTitle">
                            <strong>{dataAnime.title_japanese}</strong>                            
                        </p>
                    }
                    <hr />
                    {dataAnime.synopsis &&
                        <p className="synopsis">
                            {dataAnime.synopsis}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default AnimeDetal;