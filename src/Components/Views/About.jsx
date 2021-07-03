import * as React from 'react';
import TwoSidedBanner from '../TwoSidedBanner/TwoSidedBanner';
import wallpaperAbout from '../../assets/wallpaper2.jpg';

const About = () => (
    <div className="pricipalBanner">
        <TwoSidedBanner 
            title={"About Us"}
            text={"This is just a project to practice, in order to pass the Escalab React Course. Maybe in the future I will make more changes to the project"}                
            color={"blue"}
            widthHR={"10%"}
            HeightRow={"510px"}
            imageUrl={wallpaperAbout}
        /> 
    </div>
);
    
export default About;