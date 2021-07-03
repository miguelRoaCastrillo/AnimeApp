import * as React from 'react';
import TwoSidedBanner from '../TwoSidedBanner/TwoSidedBanner';
import animeWallpaperContact from '../../assets/anime_wallpaper.jpg';
import { CircularProgress } from '@material-ui/core';



const Contact = () => {

    const textLeft = "Contact me for more information about this page with this email: MiguelRoaCastrillo@gmail.com, until now, this is just a project for practice but in the future maybe will be a real app, just contact us if you're interesed to help!";

    return(
        <div 
            style={{
                width: '100%'
            }}
        >  
            
        <TwoSidedBanner 
            title={"Contact Us"}
            text={textLeft}                
            color={"purple"}
            widthHR={"10%"}
            HeightRow={"510px"}
            imageUrl={animeWallpaperContact}
        />
            
        </div>
    );
}

export default Contact;