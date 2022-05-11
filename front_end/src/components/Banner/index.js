import React from 'react';
import bannerImage from './image/food.jpg';
import './style.css';

/**
* @author
* @function Banner
**/

const Banner = (props) => {

    return (
        <div className="banner">
            <div className="ImageContainer">
                <img className="bannerImage" src={bannerImage} alt="banner" />
            </div>

            <div className="centered">
                <p>Enjoy Your Meal With Authentic Taste</p>
            </div>
        </div>

    )

}

export default Banner