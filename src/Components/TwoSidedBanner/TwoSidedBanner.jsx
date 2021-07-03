import * as React from 'react';
import PropTypes from 'prop-types';
import './TwoSidedBanner.css'

const TwoSidedBanner = ({title, text, imageUrl, color, widthHR, HeightRow}) => {

    const colorSelection = (color) => {

        switch(color){
            case 'red':
                return "col bg-danger"
            case 'yellow':
                return "col bg-warning"            
            case 'blue':
                return "col bg-primary"            
            case 'purple':
                return "col bg-purple"            
            default: 
                return "col bg-primary "             
        }
    }    

    return(
        <div className="containerTwoSidedBanner">
            <div 
                className="row"
                style={{
                    height: HeightRow
                }}
            >
                <div className={colorSelection(color) + " left"}>
                    <div className="containerLeft">
                    <h1>
                        {title}
                    </h1>
                    <hr 
                        className="twoSidedBannerHr" 
                        style={{
                            width: widthHR,
                            border: '1px solid #ffffff'
                        }}
                    />
                    <p className="text">
                        {text}
                    </p>
                    </div>                    
                </div>
                <div 
                    className={"col right"} 
                    style={{
                        backgroundImage: "url(" + imageUrl + ")",
                        backgroundSize: 'cover'
                    }}>
                </div>
            </div>
        </div>
    )
};

TwoSidedBanner.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    imageUrl: PropTypes.string,
    color: PropTypes.string,
    widthHR: PropTypes.string,
    HeightRow: PropTypes.string
}


export default TwoSidedBanner;