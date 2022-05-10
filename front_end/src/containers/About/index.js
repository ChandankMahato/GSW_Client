import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import {getAbout} from '../../actions/about.action';
import { generatePublicUrl } from '../../urlConfig';


/**
* @author
* @function AboutPage
**/

const AboutPage = (props) => {

  const dispatch = useDispatch();
  const about = useSelector(state => state.about);

  useEffect(() => {
    dispatch(getAbout());
  }, []);

  

  const shortIntro = about.about.map((about, index) => (about.shortIntro));
  const aboutImage = about.about.map((about, index) => (about.aboutImage));
  const description = about.about.map((about, index) => (about.description));
  const location = about.about.map((about, index) => (about.description));

  return (
    <>
    <Header/>
      <div className="about" id="aboutus">

        <div className="aboutGetYourFood">
          <img src={generatePublicUrl(aboutImage)} alt="nothing" />
          <div className='aboutText'>
            <h2>About Us</h2>
            <p>Food Delivery Service</p>
            <p id="short-intro">{shortIntro}</p>
            <p id="description">{description}</p>
            <p>We are located at:</p>
            <p id="location">{location}</p>
          </div>

        </div>

      </div>
    </>

  )

}

export default AboutPage