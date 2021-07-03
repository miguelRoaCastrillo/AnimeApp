import * as React from 'react';
import PropTypes from 'prop-types';
import './CoverThumbnail.css';

const CoverThumbnail = ({imageUrl, name, type}) =>{
    return(
        <div className="thumbnail">
            <div className="containerImageThumb">
                <img src={imageUrl} alt="" />
            </div>
            <div className="containerTextThumb">
                <div className="containerTitleThumb">
                    <h6 className="titleThumb">{name}</h6>
                </div>                
                <div className="containerType">
                    <p className="type">{type}</p>
                </div>                
            </div>
        </div>
    )
}

CoverThumbnail.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
}

export default CoverThumbnail;