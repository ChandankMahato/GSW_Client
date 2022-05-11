import React, { useRef } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';
import img5 from './image/img5.jpg';
import './style.css';

/**
* @author
* @function About
**/

const About = (props) => {
    let imgGallery = [
        { src: { src: img1 }, title: 'img1' },
        { src: { src: img2 }, title: 'img2' },
        { src: { src: img3 }, title: 'img3' },
        { src: { src: img4 }, title: 'img4' },
        { src: { src: img5 }, title: 'img5' },
        { src: { src: img1 }, title: 'img1' },
        { src: { src: img2 }, title: 'img2' },
        { src: { src: img3 }, title: 'img3' },
        { src: { src: img4 }, title: 'img4' },
        { src: { src: img5 }, title: 'img5' }
    ]
    const images = imgGallery.map((index) => <img src={index.src} title={index.title} alt="images" />).map((index) => index.props.src);

    return (
        <>
            <section className="about" id="about">
                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">

                    <div className="content">
                        <h3>Gurkha Spice Winchester</h3>
                        <p>The Gurkha spice restaurant Welcomes you to enjoy contemporary
                            Indian and authentic Nepalese cuisine. We are Newly opened family
                            run restaurant in Asley Road, between poole and Bournmouth. We are
                            serving Indian and nepalese cuisine with friendly manner of service
                            with great quality and freshely prepared food by Nepalese and Indian
                            chefs.
                        </p>
                        <p>Our chefs are specialist in the art of food preparation and strive
                            for only the best, making sure our customer receives only the best.
                            Our dishes combine the intense and aromatic flavour of Indian and
                            Nepalese Spices to bring you divinely tasty dishes. We along with
                            our food and our hospitality try to represent Nepal and its culture.
                        </p>
                        <p>Nepal is the Land with the world's highest point, Mount Everest.
                            It is birthplace of Lord Buddha and the land of the Gurkhas,
                            who are a brave army.
                        </p>
                        <p>
                            Nepalese cuisine is a combination of subtle tastes and flavours : ginger, cumin,
                            coriander, chillies, turmeric, Fenugreek, black cardamom, cloves,
                            cinemon, nutmeg, black salt, Timur( Sichuan pepper) and more.
                            Our master Chef and his team are delighted to take time to
                            prepare the dishes using fresh ingredients and the highest quality
                            spices and herbs.
                        </p>
                        <p>
                            You can book the restaurant for family dining, birthday parties,
                            private parties, business functions and to organise charity events. Please contact
                            us for further information and we will be happy to help you any way we can.
                        </p>

                    </div>

                    <div className="image">
                        <Carousel
                            className="carousel"
                            images={images}
                            hasIndexBoard={false}
                            hasMediaButton={false}
                            thumbnailWidth={'25%'}
                            thumbnailHeight={'25%'}
                        />

                    </div>
                </div>

            </section>
        </>

    )

}

export default About
